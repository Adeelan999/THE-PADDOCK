const teams = [
  {name:"McLaren", tag:"MCL", color:"#ff8700", drivers:[
    {name:"Lando Norris", number:1, nationality:"สหราชอาณาจักร", dob:"13 พฤศจิกายน 1999", debut:"2019", titles:1,
     bio:"Lando Norris เติบโตจากสายการแข่งขันรถยนต์เยาวชนของสหราชอาณาจักรและไต่ระดับผ่านรายการ junior ก่อนเข้าสู่ Formula 1 กับ McLaren ในปี 2019 เขาคว้าชัยชนะครั้งแรกที่ Miami Grand Prix 2024 และคว้าแชมป์โลกนักขับครั้งแรกในฤดูกาล 2025 ก่อนกลับมาป้องกันแชมป์กับ McLaren ในปี 2026.",
     highlights:["แชมป์โลก F1 ปี 2025","ชนะ F1 ครั้งแรกที่ Miami 2024","เป็นนักขับ McLaren ตั้งแต่ F1 debut"]},
    {name:"Oscar Piastri", number:81, nationality:"ออสเตรเลีย", dob:"6 เมษายน 2001", debut:"2023", titles:0,
     bio:"Oscar Piastri เป็นแชมป์ Formula 2 ปี 2021 และ Formula 3 ปี 2020 ก่อนก้าวสู่ F1 กับ McLaren ในปี 2023 เขาเป็นหนึ่งในนักขับรุ่นใหม่ที่เติบโตเร็วที่สุดและกลายเป็นคู่แข่งสำคัญในการลุ้นแชมป์ตั้งแต่ช่วงต้นอาชีพ.",
     highlights:["แชมป์ FIA Formula 2 ปี 2021","ชนะ F1 ครั้งแรกที่ Hungary 2024","ร่วมทีม McLaren กับ Norris ตั้งแต่ 2023"]}]},
  {name:"Ferrari", tag:"FER", color:"#e80000", drivers:[
    {name:"Charles Leclerc", number:16, nationality:"โมนาโก", dob:"16 ตุลาคม 1997", debut:"2018", titles:0,
     bio:"Charles Leclerc ผ่าน Ferrari Driver Academy และขึ้น F1 กับ Sauber ในปี 2018 ก่อนย้ายสู่ Ferrari ในปี 2019 เขาคว้าชัยชนะหลายสนามและกลายเป็นหนึ่งในนักขับหลักของทีมจาก Maranello.",
     highlights:["เข้าสู่ Ferrari ตั้งแต่ฤดูกาล 2019","คว้า pole positions จำนวนมากในยุคปัจจุบัน","เป็นนักขับโมนาโกคนสำคัญของ F1"]},
    {name:"Lewis Hamilton", number:44, nationality:"สหราชอาณาจักร", dob:"7 มกราคม 1985", debut:"2007", titles:7,
     bio:"Lewis Hamilton เปิดตัว F1 กับ McLaren ในปี 2007 และคว้าแชมป์โลกครั้งแรกในปีถัดมา ก่อนสร้างยุคแห่งความสำเร็จกับ Mercedes เขาคือหนึ่งในนักขับที่ประสบความสำเร็จที่สุดในประวัติศาสตร์ F1 และย้ายสู่ Ferrari ในปี 2025.",
     highlights:["แชมป์โลก 7 สมัย","ชัยชนะ F1 มากกว่า 100 ครั้ง","เปิดตัวกับ Ferrari ในปี 2025"]}]},
  {name:"Mercedes", tag:"MER", color:"#00d2be", drivers:[
    {name:"George Russell", number:63, nationality:"สหราชอาณาจักร", dob:"15 กุมภาพันธ์ 1998", debut:"2019", titles:0,
     bio:"George Russell เป็นสมาชิก Mercedes junior programme และเปิดตัว F1 กับ Williams ในปี 2019 ก่อนย้ายมา Mercedes ในปี 2022 เขาเป็นนักขับที่โดดเด่นด้านความเร็วรอบเดียวและการต่อสู้ในสนาม.",
     highlights:["แชมป์ GP3 ปี 2017 และ F2 ปี 2018","ย้ายสู่ Mercedes ในปี 2022","คว้าชัยชนะ F1 ครั้งแรกที่ São Paulo 2022"]},
    {name:"Kimi Antonelli", number:12, nationality:"อิตาลี", dob:"25 สิงหาคม 2006", debut:"2025", titles:0,
     bio:"Kimi Antonelli เป็นดาวรุ่งจากอิตาลีที่ Mercedes ผลักดันผ่านโปรแกรม junior เขาเปิดตัว F1 ในปี 2025 และพัฒนาขึ้นอย่างรวดเร็ว จนกลายเป็นหนึ่งในนักขับชั้นนำของฤดูกาล 2026.",
     highlights:["แชมป์ Formula Regional Europe 2022","แชมป์ Formula 2 ปี 2024","คว้าชัยชนะ Italian GP 2026"]}]},
  {name:"Red Bull Racing", tag:"RBR", color:"#3671c6", drivers:[
    {name:"Max Verstappen", number:3, nationality:"เนเธอร์แลนด์", dob:"30 กันยายน 1997", debut:"2015", titles:4,
     bio:"Max Verstappen เปิดตัว F1 กับ Toro Rosso ในปี 2015 ด้วยวัยเพียง 17 ปี ก่อนย้ายสู่ Red Bull Racing และกลายเป็นแชมป์โลก 4 สมัยติดต่อกันในช่วง 2021–2024 เขาเป็นที่รู้จักจากความเร็ว การดวลแบบดุดัน และการควบคุมรถระดับสูง.",
     highlights:["แชมป์โลก 4 สมัย (2021–2024)","ชนะ F1 ครั้งแรกที่ Spanish GP 2016","กลับมาใช้หมายเลข 3 หลัง Lando Norris คว้าแชมป์ 2025"]},
    {name:"Isack Hadjar", number:6, nationality:"ฝรั่งเศส", dob:"28 กันยายน 2004", debut:"2025", titles:0,
     bio:"Isack Hadjar เป็นนักขับฝรั่งเศสจาก Red Bull Junior Team เขาเปิดตัว F1 กับ Racing Bulls ในปี 2025 ก่อนเลื่อนขึ้นสู่ Red Bull Racing ในฤดูกาล 2026 เพื่อจับคู่กับ Max Verstappen.",
     highlights:["สมาชิก Red Bull Junior Team","เปิดตัว F1 ปี 2025","เลื่อนขึ้น Red Bull Racing ในปี 2026"]}]},
  {name:"Racing Bulls", tag:"VCARB", color:"#6692ff", drivers:[
    {name:"Liam Lawson", number:30, nationality:"นิวซีแลนด์", dob:"11 กุมภาพันธ์ 2002", debut:"2023", titles:0,
     bio:"Liam Lawson เป็นนักขับจากนิวซีแลนด์ใน Red Bull driver programme เขาเคยทำหน้าที่แทนใน F1 ก่อนเข้าสู่ Racing Bulls แบบเต็มฤดูกาล และยังคงพัฒนาตัวเองในทีมสำหรับฤดูกาล 2026.",
     highlights:["สมาชิก Red Bull Junior Team","เปิดตัว F1 ในปี 2023","แข่งขันให้ Racing Bulls ในปี 2026"]},
    {name:"Arvid Lindblad", number:41, nationality:"สหราชอาณาจักร", dob:"8 สิงหาคม 2007", debut:"2026", titles:0,
     bio:"Arvid Lindblad เป็นดาวรุ่งจาก Red Bull Junior Team ที่ไต่ระดับจาก karting และ single-seaters อย่างรวดเร็ว เขาก้าวขึ้นสู่ F1 กับ Racing Bulls ในปี 2026 และเป็น rookie เต็มฤดูกาลของกริดปีนี้.",
     highlights:["เติบโตจาก Red Bull Junior Team","แชมป์ Formula 3 ปี 2025","F1 rookie เต็มฤดูกาลปี 2026"]}]},
  {name:"Alpine", tag:"ALP", color:"#0090ff", drivers:[
    {name:"Pierre Gasly", number:10, nationality:"ฝรั่งเศส", dob:"7 กุมภาพันธ์ 1996", debut:"2017", titles:0,
     bio:"Pierre Gasly เป็นแชมป์ GP2 ปี 2016 และเข้าสู่ F1 กับ Toro Rosso ในปี 2017 เขาคว้าชัยชนะที่ Monza ในปี 2020 ซึ่งเป็นหนึ่งในชัยชนะที่น่าจดจำที่สุดของยุคใหม่ และเป็นแกนหลักของ Alpine.",
     highlights:["แชมป์ GP2 ปี 2016","ชนะ Italian GP 2020","นักขับ Alpine ตั้งแต่ 2023"]},
    {name:"Franco Colapinto", number:43, nationality:"อาร์เจนตินา", dob:"27 พฤษภาคม 2003", debut:"2024", titles:0,
     bio:"Franco Colapinto เป็นนักขับอาร์เจนตินาที่ก้าวขึ้นมาจาก Williams Academy เขาเปิดตัว F1 ในช่วงปลายปี 2024 และได้ที่นั่ง Alpine ในปี 2025 ก่อนแข่งขันต่อในปี 2026.",
     highlights:["นักขับอาร์เจนตินาคนแรกใน F1 ในรอบหลายปี","เปิดตัว F1 ปี 2024","แข่งขันกับ Alpine ในปี 2026"]}]},
  {name:"Audi", tag:"AUD", color:"#d8d8d8", drivers:[
    {name:"Gabriel Bortoleto", number:5, nationality:"บราซิล", dob:"14 ตุลาคม 2004", debut:"2025", titles:0,
     bio:"Gabriel Bortoleto เป็นดาวรุ่งบราซิลที่คว้าแชมป์ Formula 3 ปี 2023 และ Formula 2 ปี 2024 ก่อนขึ้น F1 เขาเริ่มต้นกับ Sauber และเป็นส่วนหนึ่งของโครงการ Audi เมื่อทีมเข้าสู่ยุคใหม่ในปี 2026.",
     highlights:["แชมป์ FIA Formula 3 ปี 2023","แชมป์ FIA Formula 2 ปี 2024","เป็นนักขับ Audi ในปี 2026"]},
    {name:"Nico Hulkenberg", number:27, nationality:"เยอรมนี", dob:"19 สิงหาคม 1987", debut:"2010", titles:0,
     bio:"Nico Hulkenberg เป็นนักขับเยอรมันมากประสบการณ์ เปิดตัว F1 ในปี 2010 และสร้างชื่อจากความเร็วรอบควอลิฟายรวมถึงผลงาน endurance racing เขาเข้าสู่ยุค Audi หลัง Sauber เปลี่ยนชื่อทีมในปี 2026.",
     highlights:["F1 debut ปี 2010","คว้า pole position ที่ Brazilian GP 2010","ประสบการณ์ F1 มากกว่าทศวรรษ"]}]},
  {name:"Williams", tag:"WIL", color:"#1868db", drivers:[
    {name:"Carlos Sainz", number:55, nationality:"สเปน", dob:"1 กันยายน 1994", debut:"2015", titles:0,
     bio:"Carlos Sainz เป็นนักขับสเปนที่ผ่าน Toro Rosso, Renault, McLaren และ Ferrari ก่อนย้ายสู่ Williams ในปี 2025 เขาโดดเด่นด้านความสม่ำเสมอ การอ่านเกม และความสามารถในการพัฒนารถ.",
     highlights:["F1 debut ปี 2015","ชนะ F1 ที่ Silverstone 2022","ย้ายสู่ Williams ในปี 2025"]},
    {name:"Alexander Albon", number:23, nationality:"ไทย", dob:"23 มีนาคม 1996", debut:"2019", titles:0,
     bio:"Alexander Albon เป็นนักขับไทย-อังกฤษที่เปิดตัว F1 กับ Toro Rosso ในปี 2019 และได้รับการเลื่อนสู่ Red Bull ในปีเดียวกัน ก่อนกลับมา F1 กับ Williams ในปี 2022 และกลายเป็นหัวใจสำคัญของทีม.",
     highlights:["F1 debut ปี 2019","ขึ้น Red Bull Racing ในปี 2019","นำทีม Williams ในยุคสร้างทีมใหม่"]}]},
  {name:"Cadillac", tag:"CAD", color:"#bcbcbc", drivers:[
    {name:"Sergio Perez", number:11, nationality:"เม็กซิโก", dob:"26 มกราคม 1990", debut:"2011", titles:0,
     bio:"Sergio Perez หรือ Checo เป็นนักขับเม็กซิโกที่มีประสบการณ์ยาวนานใน F1 เขาสร้างชื่อจากการจัดการยางและการแซง ก่อนกลับเข้าสู่กริดปี 2026 กับ Cadillac ซึ่งเป็นทีมใหม่ของ F1.",
     highlights:["F1 debut ปี 2011","ชนะ F1 ครั้งแรกที่ Sakhir 2020","กลับสู่กริดกับ Cadillac ในปี 2026"]},
    {name:"Valtteri Bottas", number:77, nationality:"ฟินแลนด์", dob:"28 สิงหาคม 1989", debut:"2013", titles:0,
     bio:"Valtteri Bottas เป็นนักขับฟินแลนด์ที่สร้างผลงานโดดเด่นกับ Williams และ Mercedes เขาคว้าชัยชนะหลายรายการและเป็นส่วนหนึ่งของยุคความสำเร็จของ Mercedes ก่อนกลับสู่กริดกับ Cadillac ในปี 2026.",
     highlights:["F1 debut ปี 2013","ชนะ F1 10 รายการ","รองแชมป์โลกปี 2019 และ 2020"]}]},
  {name:"Aston Martin", tag:"AMR", color:"#006f62", drivers:[
    {name:"Fernando Alonso", number:14, nationality:"สเปน", dob:"29 กรกฎาคม 1981", debut:"2001", titles:2,
     bio:"Fernando Alonso เป็นแชมป์โลก 2 สมัยจากปี 2005 และ 2006 และเป็นหนึ่งในนักขับที่มีประสบการณ์มากที่สุดในประวัติศาสตร์ F1 เขาผ่านหลายทีมระดับแถวหน้าและยังคงแข่งขันกับ Aston Martin ในปี 2026.",
     highlights:["แชมป์โลก 2 สมัย (2005, 2006)","ชนะ Le Mans 24 Hours สองครั้ง","หนึ่งในนักขับที่มีประสบการณ์มากที่สุดใน F1"]},
    {name:"Lance Stroll", number:18, nationality:"แคนาดา", dob:"29 ตุลาคม 1998", debut:"2017", titles:0,
     bio:"Lance Stroll เป็นนักขับแคนาดาที่เข้าสู่ F1 กับ Williams ในปี 2017 และคว้า podium ตั้งแต่ฤดูกาล rookie เขาเป็นนักขับหลักของ Aston Martin ตั้งแต่ทีมเปลี่ยนเข้าสู่แบรนด์ปัจจุบัน.",
     highlights:["F1 debut ปี 2017","podium ที่ Azerbaijan GP 2017","แข่งขันกับ Aston Martin ตั้งแต่ 2021"]}]},
  {name:"Haas F1 Team", tag:"HAS", color:"#b6b6b6", drivers:[
    {name:"Esteban Ocon", number:31, nationality:"ฝรั่งเศส", dob:"17 กันยายน 1996", debut:"2016", titles:0,
     bio:"Esteban Ocon เป็นนักขับฝรั่งเศสที่ผ่านโปรแกรม Mercedes junior และเปิดตัว F1 ในปี 2016 เขาคว้า podium และชัยชนะที่ Hungary 2021 ก่อนย้ายสู่ Haas ในปี 2025.",
     highlights:["F1 debut ปี 2016","คว้าชัยชนะ Hungarian GP 2021","เข้าร่วม Haas ในปี 2025"]},
    {name:"Oliver Bearman", number:87, nationality:"สหราชอาณาจักร", dob:"8 พฤษภาคม 2005", debut:"2024", titles:0,
     bio:"Oliver Bearman เป็นดาวรุ่งอังกฤษจาก Ferrari Driver Academy เขาเปิดตัว F1 แบบฉุกเฉินในปี 2024 และกลายเป็นนักขับเต็มฤดูกาลของ Haas ในปี 2025–2026.",
     highlights:["Ferrari Driver Academy","เปิดตัว F1 ปี 2024 กับ Ferrari","นักขับ Haas เต็มฤดูกาลตั้งแต่ 2025"]}]}
];


const races = [
  {round:1,country:'Australia',venue:'Melbourne',date:'2026-03-08',tz:'Australia/Melbourne',offset:'+11:00',fp1:'2026-03-06T01:30',fp2:'2026-03-06T05:00',fp3:'2026-03-07T01:30',qualifying:'2026-03-07T05:00',race:'2026-03-08T04:00',map:'6602.png'},
  {round:2,country:'China',venue:'Shanghai',date:'2026-03-15',tz:'Asia/Shanghai',offset:'+08:00',fp1:'2026-03-13T03:30',sq:'2026-03-13T07:30',sprint:'2026-03-14T03:00',qualifying:'2026-03-14T07:00',race:'2026-03-15T07:00',map:'6603.webp',type:'SPRINT'},
  {round:3,country:'Japan',venue:'Suzuka',date:'2026-03-29',tz:'Asia/Tokyo',offset:'+09:00',fp1:'2026-03-27T11:30',fp2:'2026-03-27T15:00',fp3:'2026-03-28T11:30',qualifying:'2026-03-28T15:00',race:'2026-03-29T14:00',map:'6604.webp'},
  {round:4,country:'Miami',venue:'Miami',date:'2026-05-03',tz:'America/New_York',offset:'-04:00',fp1:'2026-05-01T16:00',sq:'2026-05-01T20:30',sprint:'2026-05-02T16:00',qualifying:'2026-05-02T20:00',race:'2026-05-03T17:00',map:'6605.webp',type:'SPRINT'},
  {round:5,country:'Canada',venue:'Montreal',date:'2026-05-24',tz:'America/Toronto',offset:'-04:00',fp1:'2026-05-22T11:30',sq:'2026-05-22T15:30',sprint:'2026-05-23T11:00',qualifying:'2026-05-23T15:00',race:'2026-05-24T13:00',map:'6606.webp',type:'SPRINT'},
  {round:6,country:'Monaco',venue:'Monaco',date:'2026-06-07',tz:'Europe/Monaco',offset:'+02:00',fp1:'2026-06-05T11:30',fp2:'2026-06-05T15:00',fp3:'2026-06-06T10:30',qualifying:'2026-06-06T14:00',race:'2026-06-07T13:00',map:'6607.webp'},
  {round:7,country:'Spain',venue:'Barcelona-Catalunya',date:'2026-06-14',tz:'Europe/Madrid',offset:'+02:00',fp1:'2026-06-12T11:30',fp2:'2026-06-12T15:00',fp3:'2026-06-13T10:30',qualifying:'2026-06-13T14:00',race:'2026-06-14T13:00',map:'6608.webp'},
  {round:8,country:'Austria',venue:'Spielberg',date:'2026-06-28',tz:'Europe/Vienna',offset:'+02:00',fp1:'2026-06-26T11:30',fp2:'2026-06-26T15:00',fp3:'2026-06-27T10:30',qualifying:'2026-06-27T14:00',race:'2026-06-28T13:00',map:'6609.webp'},
  {round:9,country:'Great Britain',venue:'Silverstone',date:'2026-07-05',tz:'Europe/London',offset:'+01:00',fp1:'2026-07-03T11:30',sq:'2026-07-03T15:30',sprint:'2026-07-04T11:00',qualifying:'2026-07-04T15:00',race:'2026-07-05T14:00',map:'6610.webp',type:'SPRINT'},
  {round:10,country:'Belgium',venue:'Spa-Francorchamps',date:'2026-07-19',tz:'Europe/Brussels',offset:'+02:00',fp1:'2026-07-17T11:30',fp2:'2026-07-17T15:00',fp3:'2026-07-18T10:30',qualifying:'2026-07-18T14:00',race:'2026-07-19T13:00',map:'6611.webp'},
  {round:11,country:'Hungary',venue:'Budapest',date:'2026-07-26',tz:'Europe/Budapest',offset:'+02:00',fp1:'2026-07-24T11:30',fp2:'2026-07-24T15:00',fp3:'2026-07-25T10:30',qualifying:'2026-07-25T14:00',race:'2026-07-26T13:00',map:'6612.webp'},
  {round:12,country:'Netherlands',venue:'Zandvoort',date:'2026-08-23',tz:'Europe/Amsterdam',offset:'+02:00',fp1:'2026-08-21T11:30',sq:'2026-08-21T15:30',sprint:'2026-08-22T11:00',qualifying:'2026-08-22T15:00',race:'2026-08-23T13:00',map:'6613.webp',type:'SPRINT'},
  {round:13,country:'Italy',venue:'Monza',date:'2026-09-06',tz:'Europe/Rome',offset:'+02:00',fp1:'2026-09-04T11:30',fp2:'2026-09-04T15:00',fp3:'2026-09-05T10:30',qualifying:'2026-09-05T14:00',race:'2026-09-06T13:00',map:'6614.webp'},
  {round:14,country:'Spain',venue:'Madrid / Madring',date:'2026-09-13',tz:'Europe/Madrid',offset:'+02:00',fp1:'2026-09-11T11:30',fp2:'2026-09-11T15:00',fp3:'2026-09-12T10:30',qualifying:'2026-09-12T14:00',race:'2026-09-13T13:00',map:'6615.webp'},
  {round:15,country:'Azerbaijan',venue:'Baku',date:'2026-09-26',tz:'Asia/Baku',offset:'+04:00',fp1:'2026-09-24T08:30',fp2:'2026-09-24T12:00',fp3:'2026-09-25T08:30',qualifying:'2026-09-25T12:00',race:'2026-09-26T11:00',map:'6616.webp'},
  {round:16,country:'Bahrain',venue:'Sepang / Malaysia',date:'2026-10-04',tz:'Asia/Kuala_Lumpur',offset:'+08:00',fp1:'2026-10-02T04:30',fp2:'2026-10-02T08:00',fp3:'2026-10-03T04:30',qualifying:'2026-10-03T08:00',race:'2026-10-04T07:00',map:'6617.png'},
  {round:17,country:'Singapore',venue:'Marina Bay',date:'2026-10-11',tz:'Asia/Singapore',offset:'+08:00',fp1:'2026-10-09T08:30',sq:'2026-10-09T12:30',sprint:'2026-10-10T09:00',qualifying:'2026-10-10T13:00',race:'2026-10-11T12:00',map:'6618.webp',type:'SPRINT'},
  {round:18,country:'United States',venue:'Austin / COTA',date:'2026-10-25',tz:'America/Chicago',offset:'-05:00',fp1:'2026-10-23T17:30',fp2:'2026-10-23T21:00',fp3:'2026-10-24T17:30',qualifying:'2026-10-24T21:00',race:'2026-10-25T20:00',map:'6619.webp'},
  {round:19,country:'Mexico',venue:'Mexico City',date:'2026-11-01',tz:'America/Mexico_City',offset:'-06:00',fp1:'2026-10-30T18:30',fp2:'2026-10-30T22:00',fp3:'2026-10-31T17:30',qualifying:'2026-10-31T21:00',race:'2026-11-01T20:00',map:'6620.webp'},
  {round:20,country:'Brazil',venue:'São Paulo / Interlagos',date:'2026-11-08',tz:'America/Sao_Paulo',offset:'-03:00',fp1:'2026-11-06T15:30',fp2:'2026-11-06T19:00',fp3:'2026-11-07T14:30',qualifying:'2026-11-07T18:00',race:'2026-11-08T17:00',map:'6621.webp'},
  {round:21,country:'United States',venue:'Las Vegas',date:'2026-11-21',tz:'America/Los_Angeles',offset:'-08:00',fp1:'2026-11-20T00:30',fp2:'2026-11-20T04:00',fp3:'2026-11-21T00:30',qualifying:'2026-11-21T04:00',race:'2026-11-22T04:00',map:'6622.webp'},
  {round:22,country:'Qatar',venue:'Lusail',date:'2026-11-29',tz:'Asia/Qatar',offset:'+03:00',fp1:'2026-11-27T13:30',fp2:'2026-11-27T17:00',fp3:'2026-11-28T14:30',qualifying:'2026-11-28T18:00',race:'2026-11-29T16:00',map:'6623.png'},
  {round:23,country:'Abu Dhabi',venue:'Yas Marina',date:'2026-12-06',tz:'Asia/Dubai',offset:'+04:00',fp1:'2026-12-04T09:30',fp2:'2026-12-04T13:00',fp3:'2026-12-05T10:30',qualifying:'2026-12-05T14:00',race:'2026-12-06T13:00',map:'6624.webp'}
];
const circuitImages = Object.fromEntries(races.map(r=>[r.venue,`assets/circuits/IMG_${r.map}`]));
const driverImages={
'Lando Norris':'assets/drivers/lando-norris.webp','Oscar Piastri':'assets/drivers/oscar-piastri.webp','Charles Leclerc':'assets/drivers/charles-leclerc.webp','Lewis Hamilton':'assets/drivers/lewis-hamilton.webp','George Russell':'assets/drivers/george-russell.webp','Kimi Antonelli':'assets/drivers/kimi-antonelli.webp','Max Verstappen':'assets/drivers/max-verstappen.webp','Isack Hadjar':'assets/drivers/isack-hadjar.webp','Liam Lawson':'assets/drivers/liam-lawson.webp','Arvid Lindblad':'assets/drivers/arvid-lindblad.webp','Pierre Gasly':'assets/drivers/pierre-gasly.webp','Franco Colapinto':'assets/drivers/franco-colapinto.webp','Esteban Ocon':'assets/drivers/esteban-ocon.webp','Oliver Bearman':'assets/drivers/oliver-bearman.webp','Nico Hulkenberg':'assets/drivers/nico-hulkenberg.webp','Gabriel Bortoleto':'assets/drivers/gabriel-bortoleto.webp','Carlos Sainz':'assets/drivers/carlos-sainz.webp','Alexander Albon':'assets/drivers/alexander-albon.webp','Fernando Alonso':'assets/drivers/fernando-alonso.webp','Lance Stroll':'assets/drivers/lance-stroll.webp','Sergio Perez':'assets/drivers/sergio-perez.webp','Valtteri Bottas':'assets/drivers/valtteri-bottas.webp'};
const teamImages={'Mercedes':'assets/teams/mercedes.webp','Alpine':'assets/teams/alpine.png','Williams':'assets/teams/williams.png','McLaren':'assets/teams/mclaren.png','Cadillac':'assets/teams/cadillac.png','Ferrari':'assets/teams/ferrari.png','Red Bull Racing':'assets/teams/redbull.webp','Racing Bulls':'assets/teams/racingbulls.png','Haas F1 Team':'assets/teams/haas.png','Audi':'assets/teams/audi.webp','Aston Martin':'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Aston_Martin_Aramco_F1_Team_logo.svg/500px-Aston_Martin_Aramco_F1_Team_logo.svg.png'};
const FALLBACK='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/300px-F1.svg.png';
let use12=localStorage.getItem('f1_time_format')!=='24';
const countryTH={'Australia':'ออสเตรเลีย','China':'จีน','Japan':'ญี่ปุ่น','United States':'สหรัฐอเมริกา','Canada':'แคนาดา','Monaco':'โมนาโก','Spain':'สเปน','Austria':'ออสเตรีย','Great Britain':'สหราชอาณาจักร','Belgium':'เบลเยียม','Hungary':'ฮังการี','Netherlands':'เนเธอร์แลนด์','Italy':'อิตาลี','Azerbaijan':'อาเซอร์ไบจาน','Bahrain':'บาห์เรน','Singapore':'สิงคโปร์','Mexico':'เม็กซิโก','Brazil':'บราซิล','Qatar':'กาตาร์','Abu Dhabi':'อาบูดาบี'};
let displayRegion=localStorage.getItem('f1_region')||'th';
let language=localStorage.getItem('f1_language')||'th';
const regionZones={th:'Asia/Bangkok',jp:'Asia/Tokyo',gb:'Europe/London',us:'America/New_York',sg:'Asia/Singapore',au:'Australia/Sydney'};
const regionOffsets={th:7,jp:9,gb:0,us:-4,sg:8,au:10};
const regionNames={th:'ประเทศไทย',jp:'ญี่ปุ่น',gb:'สหราชอาณาจักร',us:'สหรัฐฯ ฝั่งตะวันออก',sg:'สิงคโปร์',au:'ออสเตรเลีย'};
function fmtTime(t,offset){if(!t)return '—';const d=new Date(t+(offset||'+00:00'));const parts=new Intl.DateTimeFormat(language==='en'?'en-US':'th-TH',{timeZone:regionZones[displayRegion]||'Asia/Bangkok',hour:'numeric',minute:'2-digit',hour12:use12}).formatToParts(d);const h=parts.find(x=>x.type==='hour')?.value||'00',m=parts.find(x=>x.type==='minute')?.value||'00',ap=parts.find(x=>x.type==='dayPeriod')?.value||'';return use12?`${h}:${m} ${ap}`:`${h.padStart(2,'0')}:${m}`}
function fmtDate(s){return new Intl.DateTimeFormat(language==='en'?'en-US':'th-TH',{day:'numeric',month:'long',year:'numeric'}).format(new Date(s+'T12:00:00Z'))}
function eventMs(local,offset){return Date.parse(local.replace('T','T')+offset)}
function sessionList(r){const a=[];if(r.fp1)a.push({key:'fp1',label:'FP1',start:r.fp1,duration:60});if(r.fp2)a.push({key:'fp2',label:'FP2',start:r.fp2,duration:60});if(r.fp3)a.push({key:'fp3',label:'FP3',start:r.fp3,duration:60});if(r.sq)a.push({key:'sq',label:'SQ',start:r.sq,duration:45});if(r.sprint)a.push({key:'sprint',label:'SP',start:r.sprint,duration:60});if(r.qualifying)a.push({key:'qualifying',label:'Q',start:r.qualifying,duration:60});if(r.race)a.push({key:'race',label:'R',start:r.race,duration:150});return a}
function findLiveSession(now=Date.now()){for(const r of races){for(const s of sessionList(r)){const start=eventMs(s.start,r.offset),end=start+s.duration*60000;if(now>=start&&now<end)return {r,s,start,end}}}return null}
function nextSession(now=Date.now()){let best=null;for(const r of races)for(const s of sessionList(r)){const start=eventMs(s.start,r.offset);if(start>now&&(!best||start<best.start))best={r,s,start}}return best}
function countdownText(diff){if(diff<=0)return '00:00:00';if(diff>86400000){const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000);return `${d}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m`}if(diff>3600000){const h=Math.floor(diff/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);return `${h}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`}const m=Math.floor(diff/60000),s=Math.floor(diff%60000/1000);return `${m}m ${String(s).padStart(2,'0')}s`}
function renderTeams(){const grid=document.getElementById('teamGrid');grid.innerHTML=teams.map((t,ti)=>`<article class="team-card" style="--team:${t.color}"><div class="team-top"><div><div class="team-name">${t.name}</div><div class="team-sub">${t.tag} • 2026</div></div><img class="team-logo" src="${teamImages[t.name]||FALLBACK}" alt="${t.name} logo"></div><div class="team-buttons">${t.drivers.map((d,di)=>`<button class="driver-button" data-ti="${ti}" data-di="${di}"><img src="${driverImages[d.name]||FALLBACK}" alt="${d.name}"><span class="driver-info"><small>#${d.number}</small><b>${d.name}</b></span></button>`).join('')}<button class="team-button" data-team="${ti}">TEAM PROFILE →</button></div></article>`).join('');document.querySelectorAll('.driver-button').forEach(b=>b.onclick=()=>openDriver(+b.dataset.ti,+b.dataset.di));document.querySelectorAll('.team-button').forEach(b=>b.onclick=()=>openTeam(+b.dataset.team))}
function setHero(color,name,meta,kicker){document.getElementById('profile').style.setProperty('--accent',color);document.getElementById('profileKicker').textContent=kicker;document.getElementById('profileName').textContent=name;document.getElementById('profileMeta').textContent=meta;document.getElementById('profileNumber').textContent='';document.getElementById('modal').classList.add('show');document.body.style.overflow='hidden'}
function openDriver(ti,di){const t=teams[ti],d=t.drivers[di];setHero(t.color,d.name,d.nationality,'DRIVER PROFILE');document.getElementById('driverTab').style.display='inline-flex';document.getElementById('teamTab').style.display='inline-flex';document.getElementById('driverTab').classList.add('active');document.getElementById('teamTab').classList.remove('active');document.getElementById('profilePhoto').src=driverImages[d.name]||FALLBACK;document.getElementById('profileNumber').textContent='#'+d.number;document.getElementById('profileContent').innerHTML=`<section><h3>OVERVIEW</h3><p>${d.bio}</p></section><div class="profile-facts"><div class="fact"><small>NATIONALITY</small><b>${d.nationality}</b></div><div class="fact"><small>BIRTH</small><b>${d.dob}</b></div><div class="fact"><small>F1 DEBUT</small><b>${d.debut}</b></div><div class="fact"><small>WORLD TITLES</small><b>${d.titles}</b></div></div><section><h3>CAREER HIGHLIGHTS</h3><ul class="highlights">${d.highlights.map(x=>`<li class="highlight">${x}</li>`).join('')}</ul></section><section><h3>TEAM</h3><p>${t.name} • ${t.tag}</p></section>`}
function openTeam(ti){const t=teams[ti];setHero(t.color,t.name,'2026 CONSTRUCTOR','TEAM PROFILE');document.getElementById('driverTab').style.display='none';document.getElementById('teamTab').style.display='none';document.getElementById('profilePhoto').src=teamImages[t.name]||FALLBACK;document.getElementById('profileContent').innerHTML=`<section class="team-profile"><div class="team-banner"><img src="${teamImages[t.name]||FALLBACK}" alt="${t.name} logo"><div><h3>${t.name}</h3><p>2026 CONSTRUCTOR • ${t.tag}</p></div></div><div class="team-drivers">${t.drivers.map(d=>`<div class="mini-driver"><img src="${driverImages[d.name]||FALLBACK}" alt="${d.name}"><div><b>${d.name}</b><span>#${d.number}</span></div></div>`).join('')}</div><div class="team-stats"><div class="team-stat"><small>TEAM CODE</small><b>${t.tag}</b></div><div class="team-stat"><small>2026 GRID</small><b>ACTIVE</b></div><div class="team-stat"><small>DRIVERS</small><b>2</b></div></div></section>`}
document.getElementById('driverTab').onclick=()=>{const name=document.getElementById('profileName').textContent;for(let ti=0;ti<teams.length;ti++)for(let di=0;di<teams[ti].drivers.length;di++)if(teams[ti].drivers[di].name===name)return openDriver(ti,di)};document.getElementById('teamTab').onclick=()=>{const name=document.getElementById('profileName').textContent;const ti=teams.findIndex(t=>t.name===name);if(ti>=0)openTeam(ti)};document.querySelectorAll('[data-close]').forEach(x=>x.onclick=closeModal);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});function closeModal(){document.getElementById('modal').classList.remove('show');document.body.style.overflow=''}
function renderSchedule(){const sg=document.getElementById('scheduleGrid');sg.innerHTML=races.map(r=>`<article class="race-card" data-round="${r.round}"><img class="circuit-img" src="${circuitImages[r.venue]}" alt="${r.venue} circuit"><div class="race-body"><div class="round">ROUND ${String(r.round).padStart(2,'0')}${r.type?`<span class="sprint"> ${r.type}</span>`:''}</div><div class="race-name">${countryTH[r.country]||r.country} • ${r.venue}</div><div class="race-date">${fmtDate(r.date)}</div><div class="sessions"><div class="session"><span>FP1</span><b>${fmtTime(r.fp1,r.offset)}</b></div>${r.fp2?`<div class="session"><span>FP2</span><b>${fmtTime(r.fp2,r.offset)}</b></div>`:''}${r.fp3?`<div class="session"><span>FP3</span><b>${fmtTime(r.fp3,r.offset)}</b></div>`:''}${r.sq?`<div class="session sprint"><span>SQ</span><b>${fmtTime(r.sq,r.offset)}</b></div>`:''}${r.sprint?`<div class="session sprint"><span>SP</span><b>${fmtTime(r.sprint,r.offset)}</b></div>`:''}<div class="session"><span>Q</span><b>${fmtTime(r.qualifying,r.offset)}</b></div><div class="session"><span>R</span><b>${fmtTime(r.race,r.offset)}</b></div></div><div class="status" data-status></div></div></article>`).join('');updateCountdown()}
function updateCountdown(){const now=Date.now(),live=findLiveSession(now),next=nextSession(now);document.querySelectorAll('.race-card').forEach(c=>{c.classList.remove('live');c.querySelector('[data-status]').innerHTML=''});if(live){const card=document.querySelector(`.race-card[data-round="${live.r.round}"]`);if(card){card.classList.add('live');card.querySelector('[data-status]').innerHTML=`<span class="live-badge">● LIVE — ${live.s.label}</span>`}document.getElementById('nextRace').innerHTML=`<div class="next-main"><div><div class="eyebrow">🔴 F1 LIVE NOW</div><h3>${countryTH[live.r.country]||live.r.country} • ${live.r.venue}</h3><div>${live.s.label} • ถ่ายทอดสด/กำลังแข่งขัน</div></div><div class="countdown live-count">LIVE</div></div>`;return}if(!next){document.getElementById('nextRace').innerHTML='<div class="next-main"><div><div class="eyebrow">SEASON COMPLETE</div><h3>2026 F1 SEASON</h3></div></div>';return}const diff=next.start-now;const card=document.querySelector(`.race-card[data-round="${next.r.round}"]`);if(card)card.querySelector('[data-status]').innerHTML=diff<3600000?'<span class="live-badge soon">● LIVE SOON</span>':'';document.getElementById('nextRace').innerHTML=`<div class="next-main"><div><div class="eyebrow">NEXT SESSION</div><h3>${countryTH[next.r.country]||next.r.country} • ${next.r.venue}</h3><div>${next.s.label} • ${fmtDate(next.s.start.slice(0,10))} • ${fmtTime(next.s.start,next.r.offset)}</div></div><div class="countdown">${countdownText(diff)}</div></div>`}
renderTeams();renderSchedule();setInterval(updateCountdown,1000);

/* ===== V9: PAGE NAVIGATION + SETTINGS ===== */
const pageIds=['drivers','calendar','games','settings'];
function showPage(name){if(!pageIds.includes(name))name='drivers';document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id==='page-'+name));document.querySelectorAll('[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===name));if(name==='calendar')renderSchedule();closeMenu();window.scrollTo({top:0,behavior:'smooth'});}
function closeMenu(){document.getElementById('menuPanel')?.classList.remove('open');document.getElementById('menuBackdrop')?.classList.remove('open')}
document.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
document.getElementById('menuBtn')?.addEventListener('click',()=>{document.getElementById('menuPanel')?.classList.add('open');document.getElementById('menuBackdrop')?.classList.add('open')});
document.getElementById('menuClose')?.addEventListener('click',closeMenu);document.getElementById('menuBackdrop')?.addEventListener('click',closeMenu);
function updateSettingsUI(){document.getElementById('time12')?.classList.toggle('active',use12);document.getElementById('time24')?.classList.toggle('active',!use12);document.getElementById('langTH')?.classList.toggle('active',language==='th');document.getElementById('langEN')?.classList.toggle('active',language==='en');const rs=document.getElementById('regionSelect');if(rs)rs.value=displayRegion;const summary=document.getElementById('regionSummary');if(summary)summary.textContent=regionNames[displayRegion]+' • GMT'+(regionOffsets[displayRegion]>=0?'+':'')+regionOffsets[displayRegion];updateExample();}
function updateExample(){const title=document.getElementById('exampleTitle'),text=document.getElementById('exampleText');if(!title||!text)return;const sample=races.find(r=>r.race);const local=sample.race;const d=new Date(local+sample.offset);const time=new Intl.DateTimeFormat(language==='en'?'en-US':'th-TH',{timeZone:regionZones[displayRegion],hour:'numeric',minute:'2-digit',hour12:use12}).format(d);title.textContent=language==='en'?'Example: Race time in your region':'ตัวอย่าง: เวลาแข่งตามประเทศที่เลือก';text.textContent=language==='en'?`${countryTH[sample.country]||sample.country} Race • ${time}`:`${countryTH[sample.country]||sample.country} Race • เวลา ${time}`;}
document.querySelectorAll('[data-time]').forEach(b=>b.addEventListener('click',()=>{use12=b.dataset.time==='12';localStorage.setItem('f1_time_format',use12?'12':'24');updateSettingsUI();renderSchedule()}));
document.getElementById('regionSelect')?.addEventListener('change',e=>{displayRegion=e.target.value;localStorage.setItem('f1_region',displayRegion);updateSettingsUI();renderSchedule();});
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{language=b.dataset.lang;localStorage.setItem('f1_language',language);updateSettingsUI();renderSchedule();}));
updateSettingsUI();

/* ===== V8: ROBUST MINI GAMES + MEMBER DEMO ===== */
const $ = (id) => document.getElementById(id);
const memberStoreKey = 'f1_archive_demo_user_v8';
const gameScoreKey = 'f1_archive_scores_v8';
const predKey = 'f1_archive_predictions_v8';
const gameView = $('gameView');
const loginBtn = $('loginBtn'), signupBtn = $('signupBtn'), logoutBtn = $('logoutBtn'), policyBtn = $('policyBtn');
const authModal = $('authModal'), policyModal = $('policyModal'), authForm = $('authForm');
const authTitle = $('authTitle'), authKicker = $('authKicker'), authUsername = $('authUsername'), authEmail = $('authEmail'), authPassword = $('authPassword');
const signupChecks = $('signupChecks'), policyCheck = $('policyCheck'), botCheck = $('botCheck'), policyReadBtn = $('policyReadBtn');
const memberStatus = $('memberStatus');
document.getElementById('signupTop')?.addEventListener('click',()=>openAuth('signup')); document.getElementById('loginTop')?.addEventListener('click',()=>openAuth('login'));

function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function getMember(){try{return JSON.parse(localStorage.getItem(memberStoreKey)||'null')}catch{return null}}
function setMember(m){localStorage.setItem(memberStoreKey,JSON.stringify(m));updateMemberUI()}
function getScores(){try{return JSON.parse(localStorage.getItem(gameScoreKey)||'{}')}catch{return {}}}
function addScore(game,points){const m=getMember();if(!m)return;const s=getScores();s[m.username]=s[m.username]||{};s[m.username][game]=(s[m.username][game]||0)+points;localStorage.setItem(gameScoreKey,JSON.stringify(s));renderLeaderboard()}
async function hashPassword(value){
  if(window.crypto?.subtle){const data=new TextEncoder().encode(value),buf=await crypto.subtle.digest('SHA-256',data);return [...new Uint8Array(buf)].map(x=>x.toString(16).padStart(2,'0')).join('')}
  let h=2166136261;for(let i=0;i<value.length;i++){h^=value.charCodeAt(i);h=Math.imul(h,16777619)}return String(h>>>0)
}
function updateMemberUI(){
  const m=getMember(); if(!memberStatus)return;
  if(m){const s=getScores()[m.username]||{},total=Object.values(s).reduce((a,b)=>a+(Number(b)||0),0);memberStatus.innerHTML=`เข้าสู่ระบบแล้ว: <b>${esc(m.username)}</b> • คะแนน ${total} • สมาชิกตั้งแต่ ${esc(m.createdAt||'วันนี้')}`;loginBtn?.classList.add('hidden');signupBtn?.classList.add('hidden');logoutBtn?.classList.remove('hidden')}
  else{memberStatus.textContent='ยังไม่ได้เข้าสู่ระบบ';loginBtn?.classList.remove('hidden');signupBtn?.classList.remove('hidden');logoutBtn?.classList.add('hidden')}
}
function openAuth(mode){if(!authModal)return;authModal.classList.add('show');document.body.style.overflow='hidden';authTitle.textContent=mode==='signup'?'SIGN UP':'LOGIN';authKicker.textContent=mode==='signup'?'CREATE ACCOUNT':'ACCOUNT LOGIN';authEmail.required=mode==='signup';signupChecks.classList.toggle('hidden',mode!=='signup');authPassword.autocomplete=mode==='signup'?'new-password':'current-password';authForm.dataset.mode=mode;authForm.reset();authForm.dataset.mode=mode;signupChecks.classList.toggle('hidden',mode!=='signup')}
function closeAuth(){authModal?.classList.remove('show');document.body.style.overflow=''}
loginBtn?.addEventListener('click',()=>openAuth('login'));
signupBtn?.addEventListener('click',()=>openAuth('signup'));
logoutBtn?.addEventListener('click',()=>{localStorage.removeItem(memberStoreKey);updateMemberUI();gameView.innerHTML='';alert('ออกจากระบบแล้ว')});
policyBtn?.addEventListener('click',()=>policyModal?.classList.add('show'));
policyReadBtn?.addEventListener('click',()=>{policyModal?.classList.remove('show');openAuth('signup');policyCheck.checked=true});
document.querySelectorAll('[data-auth-close]').forEach(x=>x.addEventListener('click',closeAuth));
document.querySelectorAll('[data-policy-close]').forEach(x=>x.addEventListener('click',()=>policyModal?.classList.remove('show')));

authForm?.addEventListener('submit',async e=>{
  e.preventDefault();const mode=authForm.dataset.mode,u=authUsername.value.trim(),email=authEmail.value.trim(),pw=authPassword.value;
  if(!u)return alert('กรุณาใส่ Username');
  if(mode==='signup'){
    if(!email)return alert('กรุณาใส่อีเมล');
    if(!policyCheck.checked||!botCheck.checked)return alert('กรุณาอ่านนโยบายและยืนยันว่าไม่ใช่บอทก่อนสมัคร');
    if(pw.length<6)return alert('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร');
    const old=getMember(); if(old&&old.username!==u)return alert('เดโมนี้รองรับบัญชีเดียวใน browser นี้');
    const passwordHash=await hashPassword(pw);setMember({username:u,email,passwordHash,createdAt:new Date().toLocaleDateString('th-TH'),policyAccepted:true,botAttested:true});closeAuth();alert('สมัครสมาชิกแบบ DEMO สำเร็จ');
  }else{
    const m=getMember();if(!m||m.username!==u)return alert('ไม่พบบัญชีนี้ในเครื่องนี้');
    if(!pw)return alert('กรุณาใส่รหัสผ่าน');
    if(m.passwordHash && m.passwordHash!==(await hashPassword(pw)))return alert('รหัสผ่านไม่ถูกต้อง');
    closeAuth();alert('เข้าสู่ระบบสำเร็จ');
  }
});

/* ===== V11: GAME MODAL + LEADERBOARD ===== */
function openGameWindow(){gameView?.classList.add('open');gameView?.setAttribute('aria-hidden','false');$('gameClose')?.classList.add('show');document.body.style.overflow='hidden'}
function closeGameWindow(){if(raceTimer){clearInterval(raceTimer);raceTimer=null}if(raceKeyHandler){document.removeEventListener('keydown',raceKeyHandler);raceKeyHandler=null}gameView?.classList.remove('open');gameView?.setAttribute('aria-hidden','true');$('gameClose')?.classList.remove('show');document.body.style.overflow='';}
$('gameClose')?.addEventListener('click',closeGameWindow);
gameView?.addEventListener('click',e=>{if(e.target===gameView)closeGameWindow()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&gameView?.classList.contains('open'))closeGameWindow()});
function renderLeaderboard(){const el=$('leaderboard');if(!el)return;const scores=getScores();const rows=Object.entries(scores).map(([user,g])=>({user,total:Object.values(g||{}).reduce((a,b)=>a+(Number(b)||0),0)})).sort((a,b)=>b.total-a.total).slice(0,10);el.innerHTML=`<div class="leaderboard-head"><div><p class="eyebrow">LEADERBOARD</p><h3>${language==='en'?'TOP F1 PLAYERS':'อันดับคะแนน F1'}</h3></div><span class="leaderboard-note">${language==='en'?'This device demo':'เดโมบนเครื่องนี้'}</span></div>${rows.length?rows.map((r,i)=>`<div class="leader-row"><span class="leader-rank">${String(i+1).padStart(2,'0')}</span><span class="leader-name">${esc(r.user)}</span><b class="leader-score">${r.total.toLocaleString()} PTS</b></div>`).join(''):`<div class="leader-empty">${language==='en'?'No scores yet. Play a game to enter the board.':'ยังไม่มีคะแนน เล่นเกมเพื่อขึ้นกระดาน'}</div>`}`}

updateMemberUI();

function showGameIntro(title,how,body=''){gameView.innerHTML=`<div class="game-panel"><p class="eyebrow">HOW TO PLAY</p><h2>${title}</h2><p class="game-help">${how}</p>${body}</div>`}
function requireMember(){if(!getMember()){alert('ต้อง Login / Sign Up ก่อน เพื่อเก็บคะแนนเกม');$('member')?.scrollIntoView({behavior:'smooth'});openAuth('signup');return false}return true}
let driverRound=0;
function startDriverGame(){if(!requireMember())return;driverRound=0;nextDriverQuestion()}
function nextDriverQuestion(){
  const pool=teams.flatMap(t=>t.drivers.map(d=>({...d,team:t.name}))),d=pool[Math.floor(Math.random()*pool.length)],choices=[d.name];
  while(choices.length<3){const x=pool[Math.floor(Math.random()*pool.length)].name;if(!choices.includes(x))choices.push(x)}choices.sort(()=>Math.random()-.5);
  gameView.innerHTML=`<div class="game-panel"><div class="score-line">QUESTION ${driverRound+1}/5</div><div class="quiz-question">ใครคือนักแข่งที่อยู่กับ <b>${esc(d.team)}</b> และใช้หมายเลข <b>#${d.number}</b>?</div><div class="quiz-options">${choices.map(x=>`<button class="game-choice" data-answer="${esc(x)}">${esc(x)}</button>`).join('')}</div><p class="game-help">ตอบให้ถูกเพื่อรับ 100 คะแนน</p></div>`;
  gameView.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{const ok=b.dataset.answer===d.name;addScore('driver-quiz',ok?100:0);gameView.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);alert(ok?'ถูกต้อง +100 คะแนน':'ผิด 😅');driverRound++;if(driverRound<5)nextDriverQuestion();else{gameView.innerHTML='<div class="game-panel"><h2>จบเกม 🏁</h2><p>บันทึกคะแนนไว้ใน Member Area แล้ว</p></div>';updateMemberUI()}}))
}
function startChampionGame(){
  if(!requireMember())return;const opts=teams.flatMap(t=>t.drivers.map(d=>d.name));
  gameView.innerHTML=`<div class="game-panel"><p class="eyebrow">2026 PREDICTION</p><h2>ปีนี้แชมป์อะไร?</h2><p>เลือกแชมป์โลกนักขับ</p><div class="quiz-options">${opts.map(x=>`<button class="game-choice" data-pred-driver="${esc(x)}">${esc(x)}</button>`).join('')}</div><p id="predMsg" class="game-help"></p><p>เลือกแชมป์ผู้สร้าง</p><div class="quiz-options">${teams.map(t=>`<button class="game-choice" data-pred-team="${esc(t.name)}">${esc(t.name)}</button>`).join('')}</div><button id="savePred" class="primary-btn" disabled>LOCK PREDICTION</button></div>`;
  let pd='',pt='';const savePred=$('savePred');
  gameView.querySelectorAll('[data-pred-driver]').forEach(b=>b.addEventListener('click',()=>{pd=b.dataset.predDriver;gameView.querySelectorAll('[data-pred-driver]').forEach(x=>x.disabled=true);$('predMsg').textContent='เลือกนักขับแล้ว: '+pd;check()}));
  gameView.querySelectorAll('[data-pred-team]').forEach(b=>b.addEventListener('click',()=>{pt=b.dataset.predTeam;gameView.querySelectorAll('[data-pred-team]').forEach(x=>x.disabled=true);check()}));
  function check(){savePred.disabled=!(pd&&pt)}
  savePred.addEventListener('click',()=>{const m=getMember(),all=JSON.parse(localStorage.getItem(predKey)||'{}');all[m.username]={season:2026,driver:pd,team:pt,createdAt:new Date().toISOString()};localStorage.setItem(predKey,JSON.stringify(all));addScore('prediction',250);updateMemberUI();alert('ล็อกคำทายแล้ว +250 คะแนน')})
}
let raceTimer=null,raceKeyHandler=null;
function startRaceGame(){
  if(!requireMember())return;let mode='mobile';showGameIntro('F1 RACE','1) เลือกอุปกรณ์  2) อ่านวิธีเล่น  3) กด START  4) หลบรถให้นานที่สุด',`<div class="game-actions"><button class="device-btn" data-device="mobile">📱 MOBILE</button><button class="device-btn" data-device="computer">💻 COMPUTER</button></div><div id="raceStart"><p class="game-help">Mobile ใช้ปุ่ม ◀ ▶ • Computer ใช้ A/D หรือ ←/→</p></div>`);
  gameView.querySelectorAll('[data-device]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.device;gameView.querySelectorAll('[data-device]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');$('raceStart').innerHTML=`<p class="game-help"><b>${mode==='mobile'?'MOBILE':'COMPUTER'}</b>: ${mode==='mobile'?'กดปุ่ม ◀ ▶ เพื่อเปลี่ยนเลน':'กด A/D หรือ ←/→ เพื่อเปลี่ยนเลน'}</p><button id="startRaceBtn" class="primary-btn">START RACE</button>`;$('startRaceBtn').addEventListener('click',()=>runRace(mode))}));
}
function runRace(mode){
  if(raceTimer)clearInterval(raceTimer);if(raceKeyHandler)document.removeEventListener('keydown',raceKeyHandler);
  gameView.innerHTML=`<div class="game-panel"><div class="score-line">TIME <span id="raceScore">0</span>s</div><div id="raceGame" class="race-game"><div class="race-lane"></div><div id="gameCar" class="game-car"></div></div><div class="game-actions"><button class="device-btn" id="leftBtn">◀</button><button class="device-btn" id="rightBtn">▶</button></div><p class="game-help">${mode==='mobile'?'กดปุ่มซ้าย/ขวาเพื่อเปลี่ยนเลน':'ใช้ A/D หรือปุ่มลูกศรซ้าย/ขวา'}</p></div>`;
  const car=$('gameCar'),box=$('raceGame'),scoreEl=$('raceScore');let lane=1,time=0,dead=false,obs=[];
  function move(dir){lane=Math.max(0,Math.min(2,lane+dir));car.style.left=(25+lane*25)+'%'}
  $('leftBtn').addEventListener('click',()=>move(-1));$('rightBtn').addEventListener('click',()=>move(1));
  raceKeyHandler=e=>{if(['ArrowLeft','a','A'].includes(e.key)){e.preventDefault();move(-1)}if(['ArrowRight','d','D'].includes(e.key)){e.preventDefault();move(1)}};document.addEventListener('keydown',raceKeyHandler);
  raceTimer=setInterval(()=>{
    if(dead)return;time+=0.1;scoreEl.textContent=time.toFixed(1);
    if(Math.random()<0.12){const o=document.createElement('div');o.className='obstacle';const ol=Math.floor(Math.random()*3);o.dataset.lane=ol;o.style.left=(25+ol*25)+'%';o.style.top='-60px';box.appendChild(o);obs.push(o)}
    obs.forEach((o,i)=>{const y=(parseFloat(o.style.top)||-60)+8;o.style.top=y+'px';const ol=Number(o.dataset.lane);if(y>235&&y<330&&ol===lane){dead=true;clearInterval(raceTimer);document.removeEventListener('keydown',raceKeyHandler);const pts=Math.floor(time*10);addScore('race',pts);updateMemberUI();alert('ชน! เวลา '+time.toFixed(1)+'s • คะแนน +'+pts);return}if(y>380){o.remove();obs.splice(i,1)}})
  },100)
}

document.querySelectorAll('[data-game]').forEach(b=>b.addEventListener('click',()=>{openGameWindow();const g=b.dataset.game;if(g==='driver')startDriverGame();else if(g==='champion')startChampionGame();else if(g==='race')startRaceGame();}));
updateMemberUI();renderLeaderboard();
