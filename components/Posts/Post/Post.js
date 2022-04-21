import Link from "next/link";

export default function PostCo({ Post, handleDelete}) {

  return (
    <>
      <h2>
        <b>Post</b>
        {Post._id}
      </h2>
      <h3>
        <b>Marca:</b> {Post.marca}
      </h3>
      <h4>
        <b>Repuesto:</b> {Post.repuesto}
      </h4>
      <h6>
        <b>Fecha:</b> {Post.date}
      </h6>
      <h4>
        <b>Cliente:</b> {Post.nombreCreador[0]}
      </h4>
      <Link href={"/posts"}>
        <a>
          <button>Regresar</button>
        </a>
      </Link>
      <button onClick={handleDelete}>Eliminar </button>
    </>
  );
}
