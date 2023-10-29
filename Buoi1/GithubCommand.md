## Bước 1: set up tài khoản Git vào máy (đã làm)
## Bước 2: tạo 1 repo mới trên github
## Bước 3: tạo 1 repo trên máy tính với lệnh git init
Lưu ý: 1 repo coi như 1 project
## Bước 4: liên kết 2 repo
Lưu ý: lên github copy dòng kiểu như này sau khi tạo repo git rồi gõ vào
`git remote add origin https://github.com/NguyenLeHoangThong/a.git`
## Bước 5: code, thay đổi gì đó trong code, các hành động thêm file, ....
## Bước 6: đẩy các hành động bước 5 lên github với combo  3 lệnh
- git add .
- git commit -m "Tin nhắn ý nghĩa của các hành động"
- git push

- Lưu ý, ở lệnh git push, nếu gõ lần đầu tiên thì git sẽ ko cho và sẽ hiện ra dòng kiểu như `git push -u origin <branch-name>`. Đơn giản chỉ cần copy dòng này và gõ vào terminal lại sẽ push lên được.