/*
 * @Author: aa 1019921999@qq.com
 * @Date: 2024-10-27 09:53:09
 * @LastEditors: aa 1019921999@qq.com
 * @LastEditTime: 2024-10-28 23:09:28
 * @FilePath: /my-app/genarateGif.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "ddtmwlut8",
  api_key: "916724293871188",
  api_secret: "hd2qw9RPI-Fq6HPFbsStGYRWUtA",
});
cloudinary.uploader.upload("./imgs/article-demo.png", { tags: "gif_sequence" });
cloudinary.uploader.upload("./imgs/dbg.png", { tags: "gif_sequence" });
cloudinary.uploader.upload("./imgs/phone.png", { tags: "gif_sequence" });
cloudinary.uploader.multi(
  "gif_sequence",
  { format: "gif" },
  (error, result) => {
    if (error) console.error(error);
    else console.log(result.secure_url); // 生成的GIF链接
  }
);
