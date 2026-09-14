F1 THE PADDOCK — V15
Account Beta 1.1 — Synced Account UI

ฐานจาก V14 Account Core โดยไม่เปลี่ยน logic สมัคร/ล็อกอินหลัก
- ด้านบนและ Account Strip ด้านล่างอ่าน current session เดียวกัน
- เมื่อ Login สำเร็จ ด้านบนจะแสดง username เดียวกับบัญชีที่ Login อยู่
- เมื่อ Logout ด้านบนกลับเป็นปุ่ม สมัคร / ล็อกอิน และด้านล่างกลับเป็นสถานะยังไม่ได้เข้าสู่ระบบ
- account-user ใช้ CSS เดิมของโปรเจกต์ และเพิ่ม cache-busting เป็น v15
- V14 core ยังเก็บเป็น script-v14.js สำหรับ rollback/reference

หมายเหตุ: ระบบบัญชียังเป็น demo localStorage ไม่ใช่ production authentication
