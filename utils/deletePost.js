export default async function deletePost(id, router, setMessage) {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        // body: JSON.stringify(id)
      });
      if (res) {
        router.push("/home");

        setMessage("Se ha eliminado correctamente");
      }
    } catch (error) {
      console.log(error);
    }
  }