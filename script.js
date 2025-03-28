const button = document.getElementById("btn");

button.addEventListener("click", () => {
  // 创建弹窗
  const popup = document.createElement("div");
  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    z-index: 1000;
  `;

  // 创建图片
  const img = document.createElement("img");
  img.src = "看三小.jpg"; // 替换成您的图片路径
  img.style.cssText = `
    max-width: 300px;
    max-height: 300px;
    display: block;
  `;

  // 创建关闭按钮
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "關閉";
  closeBtn.style.cssText = `
    margin-top: 10px;
    padding: 5px 10px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;

  // 添加元素到弹窗
  popup.appendChild(img);
  popup.appendChild(closeBtn);

  // 创建遮罩层
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  `;

  // 添加弹窗和遮罩到页面
  document.body.appendChild(overlay);
  document.body.appendChild(popup);

  // 点击关闭按钮时关闭弹窗
  closeBtn.onclick = () => {
    document.body.removeChild(popup);
    document.body.removeChild(overlay);
  };

  // 点击遮罩层时关闭弹窗
  overlay.onclick = () => {
    document.body.removeChild(popup);
    document.body.removeChild(overlay);
  };
});
