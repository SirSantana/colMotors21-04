export default async function deletePost(id, router, setMessage) {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        // body: JSON.stringify(id)
      }).then(res=> {
        res.json()
        if(res.ok){
          router.push("/deletePost")
        }
        
      })
        .catch(err=>setMessage("Ha ocurrido un error") )

      
    } catch (error) {
      console.log(error);
    }
  }