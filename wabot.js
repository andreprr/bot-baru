const qrcode = require('qrcode-terminal');
const fs = require("fs");
const { Client, LocalAuth } = require('whatsapp-web.js');
const puppeteer = require('puppeteer-core');

// Membuat client WhatsApp
const client = new Client({
    authStrategy: new LocalAuth({
        clientId: "client-one"
    }),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
});

// Menampilkan QR code untuk autentikasi
client.on("qr", qr => {
    qrcode.generate(qr, { small: true });
});

// Client siap digunakan
client.on('ready', () => {
    console.log("Bot siap digunakan untuk mengirim pesan.");
});

// Mendengarkan pesan yang diterima
client.on('message', message => {
    if (message.body === '!menu') {
        const response = `menu?
    1. !lvling
    2. blm update lgi hehe
    3. kirim masukan bisa tag @andre`;
        message.reply(response);
    }
});

// Mendengarkan pesan untuk level
client.on('message', message => {
    if (message.body === '!lvling') {
        const response = `
#Level 1-40
-Mob: Pova
Lokasi: Lonogo Canyon (Ngarai Lonogo)

#Level 40-55
-Mob: Bone Dragonewt
Lokasi: Ancient Empress Tomb: Area 1 (Makam Ratu Kuno: Area 1)

#Level 55-70
-Boss: 
↳ Flare Volg (Hard) | Level 55-62
↳ Flare Volg (Nightmare) | Level 62-70
Lokasi: Fiery Volcano: Lava Trail (Lereng Merapi: Jejak Lava)

#Level 95-112
-Boss: Masked Warrior (Pendekar Beratopeng) - (Ultimate)
 Lokasi: Land Under Cultivation: Hill (Tanah Pertanian: Tanah Tinggi)
-Alternatif:
 Mini Boss: Don Yeti
 Lokasi: Polde Ice Valley (Lembah Es Polde)

#Level 112-125
-Boss: Cerberus (Nightmare)
 Lokasi: Spring of Rebirth: Top (Mata Air Kelahiran: Puncak)

#Level 125-129
-Mini Boss: Lapin The Necromancer (Dukun Lapin)
 Lokasi: Trace of Dark River (Sungai Kegelapan)
-Boss: Scrader (Ultimate)
 Lokasi: Situs Lembah Sihir

#Level 129-146
-Boss: Cerberus (Ultimate)
 Lokasi: Spring of Rebirth: Top (Mata Air Kelahiran: Puncak)
-Alternatif:
    Boss: Memecoleolus (Ultimate)
    ↳ Level 132-146
    ↳ Dark Castle: Area 2 (Istana Gelap: Area 2)
    Miniboss: Builder Golem (Builder Golem)
    ↳ Level 132-143
    ↳ Huge Crysta Factory: 3rd Floor (Pabrik Crysta Raksasa: Lantai 3)

#Level 146-162
-Boss: Venena Coenubia (Hard)
 Lokasi: Ultimea Palace: Throne (Istana Ultimea: Takhta)
-Alternatif:
    Boss: Ifrid (Ultimate)
    ↳ Level 146-154
    ↳ Blazing Graben: Deepest Part (Graben Membara: Bagian Terdalam)
    Boss: York (Ultimate)
    ↳ Level 154-166
    ↳ Huge Crysta Factory: Storage (Pabrik Crysta Raksasa: Gudang)
    Miniboss: Super Death Mushroom (Jamur Super Mampus)
    ↳ Level 143-158
    ↳ Monster's Forest: Animal Trail (Hutan Monster: Jalan Hewan)
    Miniboss: Commander Golem (Komandan Golem)
    ↳ Level 146-162
    ↳ Lufenas Mansion: Entrance (Mansion Lufenas: Pintu Masuk)

#Level 162-179
-Boss: Venena Coenubia (Nightmare)
 Lokasi: Ultimea Palace: Throne (Istana Ultimea: Takhta)
-Alternatif:
    Boss: Mozto Machina (Ultimate)
    ↳ Level 162-172
    ↳ Large Demi Machina Factory A4
    Miniboss: Altoblepas 
    ↳ Level 166-182
    ↳ Rokoko Plains

#Level 179-182
-Miniboss: Altoblepas
 Lokasi: Rokoko Plains (Dataran Rokoko)
-Alternatif:
    Boss: Maton Sword (Pedang Maton) - (Ultimate)
    ↳ Level 176-190
    ↳ Buried Tower: Entrance (Menara Penembus Bumi: Pintu Masuk)
    Miniboss: Goldenia
    ↳ Level 179-194
    ↳ Elf Mountains Watchtower (Pegunungan Elf: Menara Kawal)

#Level 182-199
-Boss: Venena Coenubia (Ultimate)
 Lokasi: Ultimea Palace: Throne (Istana Ultimea: Takhta)

#Level 199-215
-Boss: Finstern the Dark Dragon (Finstern si Naga Kegelapan) - Ultimate
 Lokasi: Dark Dragon Shrine: Near the Top (Kuil Naga Kegelapan: Dekat Puncak)

#Level 215-227
-Boss: Kuzto (Ultimate) 
 Lokasi: Labilans Sector: Square (Distrik Labilans: Alun-Alun)

#Level 227-244
-Boss: Arachnidemon (Ultimate)
 Lokasi: Arche Valley: Depths (Lembah Arche: Area Terdalam)

#Level 244-253
-Boss: Ferzen the Rock Dragon (Ferzen si Naga Batu) - (Ultimate)
 Lokasi: Guardian Forest: Giant Tree (Hutan Lindung: Pohon Raksasa)

#Level 253-266
-Boss: Trickster Dragon Mimyugon (Nightmare)
 Lokasi: Operation Zone A4

#Level 266-272
-Boss: Red Ask Dragon Rudis (Hard)
 Lokasi: Espuma Dome A4

#Level 272-285
-Boss: Trickster Dragon Mimyugon (Ultimate)
 Lokasi: Operation Zone A4
        `;
        message.reply(response);
    }
});

// Memulai client WhatsApp
client.initialize();
