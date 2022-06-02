import React from "react";
import { client, urlFor } from "../../lib/client";
import Navbar from "../../components/Navbar";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";

const Post = ({ post }) => {
  console.log(post);

  const SampleImageComponent = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value);
    return (
      <div className="flex justify-center">
        <img
          className="my-5 rounded-md justify-center"
          src={urlFor()
            .image(value)
            .width(isInline ? 100 : 800)
            .fit("max")
            .auto("format")
            .url()}
          alt={value.alt || " "}
          loading="lazy"
          style={{
            // Display alongside text if image appears inside a block text span
            display: isInline ? "inline-block" : "block",

            // Avoid jumping around with aspect-ratio CSS property
            aspectRatio: width / height,
          }}
        />
      </div>
    );
  };

  const components = {
    types: {
      image: SampleImageComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
  };

  return (
    <main>
      <Navbar />
      <div className="lg:w-9/12 mx-auto bg-white">
        <img
          className="h-80 w-full object-cover rounded-md border-blue-500 border-4"
          src={urlFor(post.image)}
        />
        <article className="w-10/12 mx-auto">
          <div className="mt-8 space-y-1">
            <h1 className="text-5xl font-semibold  ml-3 lg:ml-7">
              {post.title}
            </h1>
            <p className="font-extralight text-xs ml-4 lg:ml-7">
              Published at {""}
              {new Date(post._createdAt).toLocaleString()}
            </p>
          </div>

          <div className="mt-10 py-5">
            <PortableText value={post.content} components={components} />
          </div>
        </article>
      </div>
    </main>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "blogs" ]{
  _id,
  slug 
}`;

  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "blogs" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  slug,
  content,
  image
}`;

  const post = await client.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
