

export default function whatsappMessage(number, text){
    const link = `https://wa.me/${number}?text=${text}`

    return link
}