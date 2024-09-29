const qrcode = require('qrcode-terminal');
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
    // Tampilkan QR code di terminal
    qrcode.generate(qr, { small: true });

    // Membuat URL pencarian Google untuk QR code
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(qr)}`;
    console.log('URL pencarian Google: ', googleSearchUrl);
});

// Mendengarkan pesan yang diterima
client.on('message', message => {
    if (message.body === '!menu') {
        const response = `menu?
    1. !lvling
    2. !buffland
    3. !bhnmq
    4. !lvlprof
    5. !lvlalche
    6. !upcrysta
    6. kirim masukan bisa tag @andre`;
        message.reply(response);
    }
});

// Mendengarkan pesan untuk level
client.on('message', message => {
    if (message.body === '!upcrysta') {
        const response = `
        🔮🔮DAFTAR UPGRADE CRYSTA🔮🔮
        ✉Sumber : Player Toram
        
        🔵 LIST UP XTALL NORMAL 🔵
        ===========================
        VERSI INDONESIA
        1. Ksatriaja -> Volotur -> Brassozard
        2. Lobalawar -> Melancia
        3. Nurethoth -> Guignol -> Golem Satpam
        4. Aranea -> Blazingur
        5. Shawle -> Dutannen
        6. Gespenst -> Salamander -> Bullamius
        7. Minotaur -> Rhinosaurus
        8. Naga Beringas Decel -> York -> Tuscog -> Bayangan Hitam -> Torexesa
        9. Metal Stinger -> Kapten Lyark Spesialis -> Ageladanios
        10. Odelon Machina -> Pret -> Lilicarolla
        11. Coryn Besar -> Seraph Machina -> Limacina
        12. Crimsosh -> Amoeba Machina
        13. Potum Raja -> Potum Platina
        14. Flare Volg -> Charugon
        15. Bos Petapa Kadal -> Orictoceras
        16. Gravicep -> Naga Abu Merah Rudis
        17. Lynx Mithurna -> Kuffania
        
        ===========================
        ENGLISH VERSION
        1. Gigan Knight -> Volotur -> Brassozard
        2. Radibat -> Melancia
        3. Nurethoth -> Guignol -> Guard Golem
        4. Aranea -> Blazingur
        5. Shawle -> Dutannen
        6. Gespenst -> Salamander -> Bullamius
        7. Minotour -> Rhinosaur
        8. Brutal Dragon Decel -> York -> Tuscog -> Black Shadow -> Torexesa
        9. Metal Stinger -> Lyark Master Specialist -> Ageladanios
        10. Odelon Machina -> Tappler -> Lilicarolla
        11. Big Coryn -> Seraph Machina -> Limacina
        12. Crimsosch -> Amoeba Machina
        13. King Potum -> Platinum Potum
        14. Flare Volg -> Charugon
        15. Fanadon -> Orictoceras
        16. Gravicep -> Red Ash Dragon Rudis
        17. Mithurna Lynx -> Kuffania
        
        ===========================
        
        🔴 LIST UP XTALL WEAPON 🔴
        ===========================
        VERSI INDONESIA
        1. Metasrigala -> Cakar Kucing Kissatpam
        2. Pomie Chan -> Pomie Chan II
        3. Potum Pahlawan -> Potum Pahlawan II -> Potum Pahlawan III -> Potum Pahlawan IV
        4. Ganglef -> Machina Tiran -> Vulture - Naga Penyamar Mimyugon
        5. Armasit -> Kadal Bunga
        6. Imitacia -> Finstern si Naga Kegelapan -> Oculasignio
        7. Imitator -> Mardula -> Velum
        8. Golem Pilar -> Machina Ultima -> Vlam si Naga Api
        9. Zahhak Machina -> Penyihir Besi Bercakar -> Naga Meraung Bovinari
        10. Iblis Kristal Jahanam -> Shampy -> Irestida -> Vatudo
        11. Ksatria Buruk Dusta -> Gwaimol -> Hexter -> Don Profundo
        12. Gerbang Iblis -> Mozto Machina -> Pisteus -> Naga Jahat Fazzino
        13. Zolban -> Repthon -> Naga Trompet Reguita
        14. Pedang Sihir Iblis -> Kristal Berlumur Darah
        15. Mbah Dukun Usasama -> Mbah Dukun Usasama II
        16. Ganglef -> Kepiting Bulan Besar
        17. Dukun Lapin -> Momok Gelembung
        18. Golem Galian -> Builder Golem
        19. Pedang Neo Maton -> Pedrio
        20. Zega III -> Zega IV -> Zega V -> Zega VI -> Zega VII
        21. Sang Juara Megiston -> Sang Juara Megiston II -> Sang Juara Megiston III -> Sang Juara Megiston IV -> Sang Juara Megiston V
        22. Arbogazella -> Doridodi
        23. Armasit -> Diark
        
        ===========================
        ENGLISH VERSION
        1. Blancanine the White Fang -> Cat Claw Guardkissa
        2. Pomie Chan -> Pomie Chan II
        3. Hero Potum -> Hero Potum II -> Hero Potum III -> Hero Potum IV
        4. Ganglef -> Tyrant Machina -> Vulture - Trickster Dragon Mimyugon
        5. Armasite -> Florizard
        6. Imitacia -> Finstern the Dark Dragon -> Oculasignio
        7. Imitator -> Mardula -> Velum
        8. Pillar Golem -> Ultimate Machina -> Vlam the Flame Dragon
        9. Zahhak Machina -> Clawed Iron Witch -> Raging Dragon Bovinari
        10. Evil Crystal Beast -> Shampy -> Irestida -> Vatudo
        11. Black Knight of Delusion -> Gwaimol -> Hexter -> Don Profundo
        12. Demon's Gate -> Mozto Machina -> Pisteus -> Wicked Dragon Fazzino
        13. Zolban -> Repthon -> Brass Dragon Reguita
        14. Evil Magic Sword -> Blood Smeared Crystal
        15. Usasama the Necromancer -> Usasama the Necromancer II
        16. Ganglef -> Giant Moon Crab
        17. Lapin The Necromancer -> Bubble Bogey
        18. Excavated Golem -> Builder Golem
        19. Neo Maton Sword -> Pedrio
        20. Zega III -> Zega IV -> Zega V -> Zega VI -> Zega VII
        21. Megiston The Champion -> Megiston The Champion II -> Megiston The Champion III -> Megiston The Champion IV -> Megiston The Champion V
        22. Arbogazella -> Doridodi
        23 Armasite -> Diark
        
        ===========================
        
        🟢 LIST UP XTALL ARMOR 🟢
        ===========================
        VERSI INDONESIA
        1. Cerabes -> Mimesia -> Sakura Merah Jelita -> Baavgai
        2. Kruztor -> Kruztor II
        3. Sosok Jahat -> Velly Hitam
        4. Pilz Erosi -> Filrocas
        5. Golem Preman -> Naga Langkisau
        6. Ifrid -> Mama Fluck -> Gordel
        7. Forestia -> Glaucius
        8. Usakichi -> Usami -> Usamochi
        9. Bos Roga -> Iconos -> Ornlaf -> Roga Safir -> Ferzen si Naga Batu -> Walican
        10. Gopherga -> Yuveria
        11. Cerberus -> Pyxtica -> Gemma
        12. Noeliel -> Noeliel si Patung Es Suci -> Kucing Yule -> Gegner
        13. Quasar Jahanam -> Mata Jahanam
        14. Colon Komandan -> Goleps
        15. Elang Zamrud -> Jamur Super Mampus
        16. Tortuga -> Daddy Finpen -> Capo Profundo
        17. Dr. Leonardo -> Dr. Leonardo II
        18. DX Fighter -> DX Fighter II
        19. Arachnidemon -> Zapo
        
        ===========================
        ENGLISH VERSION
        1. Cerabes -> Mimesia -> Dreamy Scarlet Sakura -> Baavgai
        2. Kruztor -> Kruztor II
        3. Evil Shadow -> Black Velly
        4. Eroded Pilz -> Filrocas
        5. Thug Golem -> Galegon
        6. Ifrid -> Mom Fluck -> Gordel
        7. Forestia -> Glaucius
        8. Usakichi -> Usami -> Usamochi
        9. Boss Roga -> Iconos -> Ornlaf -> Sapphire Roga -> Ferzen the Rock Dragon -> Walican
        10. Gopherga -> Yuveria
        11. Cerberus -> Pyxtica -> Gemma
        12. Noeliel -> Noeliel the Ice Statue -> Yule Cat -> Gegner
        13. Demonic Quasar -> Demonic Eye
        14. Colon Commander -> Goleps
        15. Jade Raptor -> Super Death Mushroom
        16. Tortuga -> Daddy Finpen -> Capo Profundo
        17. Dr. Leonardo -> Dr. Leonardo II
        18. DX Fighter -> DX Fighter II
        19. Arachnidemon -> Zapo
        
        ===========================
        
        🟡 LIST UP XTALL ADDITIONAL 🟡
        ==============================
        VERSI INDONESIA
        1. Kapten Karatan -> Exdocus
        2. Warmonger -> Proto Leon -> Raja Piton -> Naga Membara Igneus
        3. Naga Senja -> Baphomela -> Bayangan Biru Tafakur
        4. Naga Sabana Yelb -> Roda Kelana -> Roda Kelana Neo
        5. Naga Sabana Yelb -> Roda Kelana -> Gordo
        6. Pumpking -> Jeila -> Zoe -> Zarth -> Neewollah -> Eripmav
        7. Dusk Machina -> Trokostida
        8. Ayah Yashiro Azuki -> Raja Kegelapan
        9. Raja Kerbau -> Paduka Raja Kerbau
        10. Raja Kerbau -> Pillow Kitagawa
        11. Biskuit Buatan Tangan -> Alfenix
        12. Eidenliebe -> Garnache
        13. Gespenst II -> Stellar Ooze
        14. Adaro -> Monster Dasar Laut
        15. Seltirio -> Tardigrademon
        16. Iconos Emas -> Kodok Riang -> Gem Mas
        17. Celeng Raksasa -> Mega Alpoca
        18. Tengkorak Emas -> Solopy
        19. Candela -> Candela II -> Amargon
        20. Chocolate Ooze -> Chocolate Ooze II -> Soldner
        21. Ratu Kuno -> Ratu Kuno II
        22. Altoblepas -> Jiva
        23. Grylee -> Fantica
        
        ==============================
        ENGLISH VERSION
        1. Corroded Knight Captain -> Exdocus
        2. Warmonger -> Proto Leon -> King Piton -> Burning Dragon Igneus
        3. Twilight Dragon -> Baphomela -> Prudent Blue Shadow
        4. Grass Dragon Yelb -> Wandering Wheel -> Neo Wandering Wheel
        5. Grass Dragon Yelb -> Wandering Wheel -> Gordo
        6. Pumpking -> Jeila -> Zoe -> Zarth -> Neewollah -> Eripmav
        7. Dusk Machina -> Trocostida
        8. Yashiro Azuki's Dad -> Dark Lord
        9. Ox King -> Royal Ox King
        10. Ox King -> Pillow Kitagawa
        11. Handmade Cookie -> Alfenix
        12. Eidenliebe -> Garnache
        13. Gespenst II -> Stellar Ooze
        14. Adaro -> Underwater Ruins Monster
        15. Seltirios -> Tardigrandemon
        16. G. Iconos -> Felicitoad -> Goldigem
        17. Giant Boar -> Mega Alpoca
        18. Golden Skeleton -> Solopy
        19. Candela -> Candela II -> Amargon
        20. Chocolate Ooze -> Chocolate Ooze II -> Soldner
        21. Ancient Empress -> Ancient Empress II
        22. Altoblepas -> Jiva
        23. Grylee -> Fantica
        
        ==============================
        
        🟣 LIST UP XTALL RING 🟣
        =============================
        VERSI INDONESIA
        1. Kristal Jahat -> Tapir -> Patissia -> Sicanokami
        2. Kristal Jahat -> Kristal Misterius
        3. Viscum -> Deniala -> Amalgam -> Crysmort -> Breeta
        4. Bexiz -> Zelbuse -> Naga Milisi Turba
        5. Dark Mushroom -> Teertocrit
        6. Baron Bling-bling -> Roh Orang Mati
        7. Venena -> Venena II -> Humida
        8. Violaccoon -> Ketua Bandit Gurun
        9. Ooze -> Lalvada -> Dominaredor
        10. Tentara Batu -> Memecoleous
        11. Volgagon -> Etoise
        12. Seele Zauga -> Seele Zauga II
        13. Potumotter -> Potumotter II
        
        =============================
        ENGLISH VERSION
        1. Eerie Crystal -> Tapir -> Patissia -> Sicanokami
        2. Eerie Crystal -> Mysterious Crystal
        3. Viscum -> Deniala -> Amalgam -> Crysmort -> Breeta
        4. Bexiz -> Zelbuse -> War Dragon Turba
        5. Dark Mushroom -> Teertocrit
        6. Shining Gentleman -> Espectro
        7. Venena -> Venena II -> Humida
        8. Violaccoon -> Sand Bandits Leader
        9. Ooze -> Lalvada -> Dominaredor
        10. Stone Mercenary -> Memecoleous
        11. Volgagon -> Etoise
        12. Seele Zauga -> Seele Zauga II
        13. Potumotter -> Potumotter II
        
        =============================
        `;
        message.reply(response);
    }
});



client.on('message', message => {
    if (message.body === '!lvlalche') {
        const response = `
        Leveling Prof Alchemist★
            Prof 1    -10   buat revita I
            Prof 10  -30   buat revita II
            Prof 31  -55   buat revita III
            Prof 56  -80   buat revita IV     
            Prof 81  -105 buat revita V
            Prof 106-135 buat revita VI
            Prof 136-240 buat ori dari ori ore
            Prof 241-320 buat HPO dari ori
            TL Note : Gak guna bgst prof sampe 320
        `;
        message.reply(response);
    }
});


client.on('message', message => {
    if (message.body === '!lvlprof') {
        const response = `
        List Leveling Lv proff★

        1-10(pedang kayu)★
        11-25(1h gladius pedang rusak x20 + gigi bergerigi x20)
        25-50(1h rapier pasir halus x5 + tulang naga x30)
        50-70(1h pyhto blade mahkota sabana x1 + sisik sabana x5)
        70-90(1h pedang indigo sirip panas x20 + pedang cacat x5)
        90-100(bow death eater C.kepala cerbe x2 + rantai penyucian x1)
        100-130(2h waldfee batu C.mistis x2 + batu bersihir x1)
        130-140(Hb baskara prasasti bersina x5 + halo terputus x20)
        140-150(tombak ignis, kristal merah darah x5+gigi depan patah x25)
        
        Diff 150★
        Tongkat jamur berkilau (bos Shampy di tambang turnus)
        Tongkat syaman (mob Roca di jalan eryldan, mob Soul reaper di kuil naga kegelapan)
        
        Diff 155★
        Baju kaisar wanita (bos Venena coenubia di istana ultimea)
        
        Diff 160★
        Busur algojo (mob Laurus di distrik labilans (mob rentan hilang, jadi butuh party minimal 2 anggota), mob Tentakel aneh di pos depan plastida (farmlah di area ketiga dan menghadaplah ke portal dimana anda masuk agar mob tidak hilang))
        Zirah malaikat perang kagura (bos Mardula di serambi dewa berkah)
        
        Diff 165★
        Pedang taring naga kegelapan (bos Finstern si naga kegelapan di kuil naga kegelapan (break bagian tubuhnya))
        Katana cakar naga (bos Finstern si naga kegelapan di kuil naga kegelapan (break bagian tubuhnya))
        
        Diff 170★
        Busur Nurwulan (bos Pilz erosi di bongkahan morthell (break bagian tubuh))
        Tombak kraman (bos Pilz erosi di bongkahan morthell (break bagian tubuh))
        
        Diff 180★
        Pedang jet indigo (bos Pyxtica di distrik fractum (break bagian tubuhnya) (Bos Rumit!))
        Rilevatore (bos Pyxtica di distrik fractum (break bagian tubuhnya)(Bos Rumit!))
        Gada Safir (bos Roga Safir di Pos Depan Plastida (break kepala)) (Agak repot, butuh party)
        Katana Lamina Penusnah (bos Gravicep di Distrik Recetacula: Atap Depot (break bagian tubuh))
        Tongkat Lempeng Fana (bos Gravicep di Distrik Recetacula: Atap Depot (break bagian tubuh))
        
        Diff 185★
        Zirah Pepagan (bos Kuzto di Distrik Labilans: Alun-alun (break bagian tubuhnya untuk mendapatkan item Kacang Mistis))
        `;
        message.reply(response);
    }
});



client.on('message', message => {
    if (message.body === '!bhnmq') {
        const response = `
        Berikut Daftar Bahan Main Quest:
        *Chapter (Bab) 1*
         Colon Leaf (Daun Colon) x5
         Hard Dragon Skin (Sisik Naga) x2
         Lamb Meat (Daging Domba)  x1
         Fairy Feather (Sayap Peri) x3
         Thick Beak (Paruh tebal) x3
         Vine (Sulur) x3
         
        *Chapter (Bab) 2*
         Swordsman Stone Coin (Koin Ksatria) x20
         
        *Chapter (Bab) 3*
         Sand Mole Meat (Daging Tikus Pasir) x1
         Beast Claw (Cakar Binatang Buas) x5
         Sand Frog Skin (Kulit Kodok Pasir) x5
         Jagged Fang (Taring Bergerigi) x10
         Saham Crystal (Kristal Saham) x5
         Spiritual Gemstone (Permata Jiwa) x1
         
        *Chapter (Bab) 8*
         Rokoko Grape (Anggur rokoko) x5
         
        *Chapter (Bab) 9*
         Labilans Wood (Kayu labilans) x10
         
        *Chapter (Bab) 11*
         Broken Horn (Tanduk Patah) x20
         
        *Chapter (Bab) 12*
         Jabali Stone (Tanduk Patah) x5
         Growing Ore (Biji Berkembang) x5
        
        `;
        message.reply(response);
    }
});

client.on('message', message => {
    if (message.body === '!buffland'){
        const response = `*KODE BUFF TORAM ONLINE*

🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
MAX HP★

1010203   HP Lv 10
6010062   HP Lv 10 + Frac Barrier Lv 8
1010032   HP Lv 10
1010084   HP Lv 10
1011945   HP Lv 10
1234567   HP Lv 10
3011143   HP Lv 10
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
MAXMP★

1027777   MP LV 10
6052000   MP Lv 10
1020808   MP Lv 10
1200001   MP Lv 10 + DEX Lv 9
1220069   MP Lv 10 + DTE Water
2011234   MP Lv 10 + AMPR Lv 9 
7012828   MP Lv 10
3204544   MP Lv 10
6010021   MP Lv 10
6070013   MP Lv 10
1011212   MP Lv 10
1016646   MP Lv 10
4011793   MP Lv 10
1010013   MP Lv 10
4011793   MP Lv 10
1011212   MP Lv 10
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
AMPR★

2010068   AMPR Lv 10
5010031   AMPR Lv 10 + DEX Lv 9
5236969   AMPR Lv 10 + DTE Earth Lv 6
4040404   AMPR Lv 10
1011010   AMPR Lv 10
3063101   AMPR Lv 10
1010006   AMPR Lv 10
1011010   AMPR Lv 10
1023040   AMPR Lv 10
3062728   AMPR Lv 10
1010017   AMPR Lv 10
1010092   AMPR Lv 10
5240001   AMPR Lv 10
1010050   AMPR Lv 10
1019696   AMPR Lv 10
3226325   AMPR Lv 10
5010103   AMPR Lv 10
2011111   AMPR Lv 8
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
CRITICAL RATE★

7162029   CR Lv 10
6022292   CR Lv 10
1200069   CR Lv 10
1010006   CR Lv 10
1010092   CR Lv 10
1010017   CR Lv 10
1010050   CR Lv 10
1011010   CR Lv 10
1012000   CR Lv 10
1100000   CR Lv 10
1069927   CR Lv 10
1012000   CR Lv 10
1010433   CR Lv 10 + DTE Light  
3020108   CR Lv 10 
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
WEAPON ATK★

1010810   WATK Lv 10 + DTE Water Lv 4
3081024   WATK Lv 10 + Accuracy Lv 7
1010029   WATK Lv 10
1010099   WATK Lv 10
6010024   WATK Lv 10
1011126   WATK Lv 10
2020404   WATK Lv 10
2010136   WATK Lv 10
3070028   WATK Lv 9
7162029   WATK Lv 9
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
STR★

1110033   STR Lv 10
1011069   STR Lv 10
7031997   STR Lv 10 
7070777   STR Lv 10
4016699   STR Lv 10
2020303   STR Lv 10
3010095   STR Lv 10
3010085   STR Lv 10
3010003   STR Lv 9
4010417   STR Lv 9
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
DEX★

4084545   DEX Lv 10 + DTE Fire Lv 5
1010058   DEX Lv 10
5010092   DEX Lv 10
1010106   DEX Lv 10
7011001   DEX Lv 10
2020222   DEX Lv 10
1010058   DEX Lv 10
1020001   DEX Lv 9
6140110   DEX Lv 9

🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
INT★

1019605   INT Lv 8
2020707   INT Lv 10
6061294   INT Lv 10
1010489   INT lv 10
6010701   INT lv 10
1032222   INT Lv 10 + MP Lv 9
1010140   INT Lv 9
6010193   INT Lv 9 
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
AGI★

7162029   AGI Lv 10
2020909   AGI Lv 9
5130123   AGI Lv 9
1010050   AGI Lv 8
1010050   AGI Lv 8
4010228   AGI Lv 8
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
ACCURACY★

4261111   ACC Lv 10
1010013   ACC Lv 9
7010077   ACC Lv 9
3188000   ACC Lv 8
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
MAGICAL RESIST★

2020505   MRest Lv 10
5200052   MRest Lv 10
1010004   MRest Lv 10
7010016   MRest Lv 10
7030023   MRest Lv 10
1100002   MRest Lv 9
4080087   MRest Lv 9
7227777   MRest Lv 9
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
PHYSICAL RESIST★

1020001   PRest Lv 10
1100000   PRest Lv 10
3010034   PRest Lv 10
7010014   PRest Lv 10
6011415   PRest Lv 9
4200069   PRest Lv 9
6010701   PRest Lv 9
1018989   PRest Lv 9
3011999   PRest Lv 9
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
FRACTIONAL BARRIER★

7010082   Frac Barrier Lv 10
1222002   Frac Barrier Lv 8
6181999   Frac Barrier Lv 8
6010062   Frac Barrier Lv 8
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
+AGGRO%★

7171717   +Aggro Lv 10
3030110   +Aggro Lv 10
2020606   +Aggro Lv 10
3053131   +Aggro Lv 10
6262000   +Aggro Lv 10
1010207   +Aggro Lv 10
3204544   +Aggro Lv 10
3158668   +Aggro Lv 10
1016646   +Aggro Lv 10
3030110   +Aggro Lv 10
1264321   +Aggro Lv 10
1014230   +Aggro Lv 9
1013000   +Aggro Lv 9
1190069   +Aggro Lv 9
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
-AGGRO%★

1010038   -Aggro Lv 10
1010002   -Aggro Lv 10
1010147   -Aggro Lv 10
1016646   -Aggro Lv 10
6010009   -Aggro Lv 10
3010018   -Aggro Lv 10
3061206   -Aggro Lv 8
3134610   -Aggro Lv 9 
4200963   -Aggro Lv 8
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
DTE EARTH★

2020202   DTE Earth Lv 10
3210103   DTE Earth Lv 9
1011111   DTE Earth Lv 8
2022222   DTE Earth Lv 8
4083005   DTE Earth Lv 8 
2099876   DTE Earth Lv 7
1010174   DTE Earth Lv 7 
5240001   DTE Earth Lv Earth Lv 7
3011143   DTE Earth Lv 7
1016646   DTE Earth Lv 7
1010002   DTE Earth Lv 6
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
DTE WIND★

3210101   DTE Wind Lv 9
3030303   DTE Wind Lv 8
3062111   DTE Wind Lv 8
1010055   DTE Wind Lv 7 
4099876   DTE Wind Lv 7   
1010055   DTE Wind Lv 7
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
DTE WATER★

7150030   DTE Water Lv 9
3210100   DTE Water Lv 10
3062111   DTE Water Lv 8
7011001   DTE Water Lv 8
2260006   DTE Water Lv 8
1110111   DTE Water Lv 8
6070013   DTE Water Lv 7
1010067   DTE Water Lv 7
3010018   DTE Water Lv 7
1110007   DTE Water Lv 7
3226325   DTE Water Lv 6
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
DTE FIRE★

3210106   DTE Fire Lv 9
7011001   DTE Fire Lv 8
1010799   DTE Fire Lv 7
1012610   DTE Fire Lv 7
2010091   DTE Fire Lv 6
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
DTE LIGHT★

3210105   DTE Light Lv 10
1020345   DTE Light Lv 9
4046666   DTE Light Lv 8
4016699   DTE Light Lv 6
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
DTE DARK★

1190020   DTE Dark Lv 10
5010092   DTE Dark Lv 10
3210104   DTE Dark Lv 10
3210105   DTE Dark Lv 9
1020345   DTE Dark Lv 9
3210106   DTE Dark Lv 9
5010092   DTE Dark Lv 9
6010003   DTE Dark Lv 8
1010006   DTE Dark Lv 7
1016646   DTE Dark Lv 7
1091111   DTE Dark Lv 7
3030069   DTE Dark Lv 7
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
DTE NEUTRAL★

3210102   DTE Neutral Lv 10
3099876   DTE Neutral Lv 7
1011902   DTE Neutral Lv 7
6061294   DTE Neutral Lv 7
1019696   DTE Neutral Lv 6
1032727   DTE Neutral Lv 5
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
DROP RATE★

1010084   Drop Rate Lv 6
4196969   Drop Rate Lv 6
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
        `;
        message.reply(response);
    }
});


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
