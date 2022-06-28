

export const convertidor=(archivos, setImage)=>{
    console.log(archivos);
    Array.from(archivos).forEach(archivo=>{
        let reader = new FileReader()
        console.log(archivo);
        reader.readAsDataURL(archivo)
        reader.onload=function(){
            let data = []
            let base64 = reader.result
            data = base64.split(",")
            setImage(data[1])
            console.log(data[1]);
        }
    })
}