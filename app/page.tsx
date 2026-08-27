import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="text-4xl font-semibold tracking-tighter mb-1">Jignesh Gurav</h1>
      <span className="mb-10 text-xl">full stack engineer</span>
      <p className="mb-4 mt-10 ">
        {`I build production web apps end to end — frontend, backend, deployment. Spent the last five years on lean early-stage teams shipping full-stack systems, from React components to GraphQL/GRPC backends to infra on AWS/GCP. Now I'm leaning harder into scalable systems and the parts of the stack that break at scale..`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
