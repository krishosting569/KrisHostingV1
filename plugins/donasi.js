import fetch from 'node-fetch'
import fs from 'fs';
import crypto from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {
    const ultah = new Date('November 4 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let sewa = `
         γ llΔ± π£πππΊππ ${namebot} Δ±ll γ
    
βββ
βγ Hi π γ
ββ¬β γ @${name} γ
ββ€β Donasi Atau Lirik Doang Anj
βββββββββββββββ β³Ή
ββγ *Donasi Via Berikut* γ  
β
β βͺ Gopay : 0882007324217
β βͺ Dana : 0882007324217
β βͺ Pulsa : 0882007324217
β βͺ Pulsa : 0882007324217
β βͺ ovo : 0882007324217
β βͺ Saweria : 0882007324217
β°ββββββββββββββββ
β
ββγ *Messege* γ       
ββββββββββββββ
πππππππππ ππ π΄πππ πππππ π΅πππ‘π’ πππππ’ππ’ππ πππ¦π,ππππππ πππ§πππ ππππ π·π πΎππ ππ π΄ππππ π΄πππ ππππππππ,π΅πππ‘πππππ ππππ’π π  π΅πππ‘πππππ.
ββ¬βββββββββββββ β³Ή
   βββββββββββββββ β³Ή
`
        let img1 = fs.readFileSync('./thumbnail.jpg');
        let img2 = fs.readFileSync('./media/bawah.png');
    return conn.sendButton(m.chat, hiasan, sewa, await (await fetch(`https://telegra.ph/file/9ece00938d66e45718679.jpg`)).buffer(), [["Menu", usedPrefix + "menu"], ["Sewa Bot", usedPrefix + "sewa"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `π Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Subscribe YT My Bestie`,                                       previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/9ece00938d66e45718679.jpg`)).buffer(),
                        sourceUrl: 'https://youtu.be/PeLEpmoiO4U'
            }
        }
    })
}
handler.help = ['owner']
handler.tags = ['Bot']

handler.command = /^(donasi|donate)$/i

export default handler
