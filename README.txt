F1 DRIVER ARCHIVE 2026 - V8

โครงสร้างพร้อมสำหรับ GitHub Pages:
- index.html
- style.css
- script.js
- assets/drivers (22 รูป)
- assets/teams (11 โลโก้)
- assets/circuits (23 แผนผังสนาม)

V8 fixes:
- แก้การอ้าง element ด้วย id ให้ใช้ getElementById/querySelector โดยตรง ไม่พึ่ง implicit global IDs ที่อาจทำงานไม่เหมือนกันใน Safari/GitHub Pages
- เปลี่ยนชื่อไฟล์ driver assets เป็นชื่อเต็มแบบ kebab-case และแก้ path ใน script.js ให้ตรงกัน
- Mini Games 3 เกม: ทายนักแข่ง / ปีนี้แชมป์อะไร? / F1 Race
- F1 Race เลือก Mobile หรือ Computer และมี HOW TO PLAY
- Member demo: Login / Sign Up / Policy / อ่านแล้วและยอมรับ / ฉันไม่ใช่บอท / คะแนน
- password ใน demo เก็บเป็น SHA-256 hash ใน localStorage; สำหรับระบบออนไลน์จริงควรใช้ backend auth
