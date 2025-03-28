// 送出留言並寫入 Firebase
function addComment() {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || message === "") {
    alert("請輸入名字和留言！");
    return;
  }

  // 把留言寫進 Firebase
  const newMessageRef = db.ref("messages").push();
  newMessageRef.set({
    name: name,
    message: message,
    timestamp: Date.now()
  });

  // 清空欄位
  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
}

// 從 Firebase 即時監聽留言變化
db.ref("messages").on("value", (snapshot) => {
  const commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML = ""; // 清空畫面

  const data = snapshot.val();
  if (data) {
    const entries = Object.values(data);
    entries.sort((a, b) => a.timestamp - b.timestamp); // 排序

    entries.forEach((entry) => {
      const comment = document.createElement("p");
      comment.innerHTML = `🗨️ <strong>${entry.name}</strong>：${entry.message}`;
      commentsDiv.appendChild(comment);
    });
  }
});

// 获取按钮和图片元素
const btn = document.getElementById('btn');
const img = document.getElementById('myImage');

// 检查元素是否正确获取
console.log('按钮元素:', btn);
console.log('图片元素:', img);

// 添加点击事件监听器
btn.addEventListener('click', function() {
    console.log('按钮被点击了');
    try {
        // 隐藏不需要的内容
        document.querySelector('.image-container').style.display = 'none';
        document.querySelectorAll('.main-content p').forEach(p => p.style.display = 'none');
        document.querySelector('.main-content h1').style.display = 'none';
        document.querySelector('.comment-section').style.display = 'none';
        
        // 显示图片并调整位置
        img.src = "看三小.jpg";
        img.style.display = 'block';
        img.style.position = 'fixed';
        img.style.left = '20px';
        img.style.top = '50%';
        img.style.transform = 'translateY(-50%)';
        img.style.maxWidth = '600px';
        img.style.width = 'auto';
        img.style.height = 'auto';
        img.style.zIndex = '1000';
        
        // 更改网页背景
        document.body.style.backgroundImage = 'url("看三小.jpg")';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundRepeat = 'no-repeat';
        
        // 隐藏按钮
        btn.style.display = 'none';
        
        // 创建新按钮
        const newBtn = document.createElement('button');
        newBtn.textContent = '伊布很可愛';
        newBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 30px;
            font-size: 24px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        `;
        
        // 添加新按钮的悬停效果
        newBtn.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#45a049';
            this.style.transform = 'translateX(-50%) scale(1.1)';
        });
        
        newBtn.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#4CAF50';
            this.style.transform = 'translateX(-50%) scale(1)';
        });
        
        // 添加新按钮的点击事件
        newBtn.addEventListener('click', function() {
            // 保持所有内容隐藏
            document.querySelector('.image-container').style.display = 'none';
            document.querySelectorAll('.main-content p').forEach(p => p.style.display = 'none');
            document.querySelector('.main-content h1').style.display = 'none';
            document.querySelector('.comment-section').style.display = 'none';
            
            // 隐藏左侧图片
            img.style.display = 'none';
            
            // 更换背景图片
            document.body.style.backgroundImage = 'url("伊布神壇.png")';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundAttachment = 'fixed';
            document.body.style.backgroundRepeat = 'no-repeat';
            
            // 修改按钮文字
            this.textContent = '快跑';
            
            // 添加新的点击事件
            this.onclick = function() {
                // 恢复所有隐藏的内容
                document.querySelector('.image-container').style.display = 'block';
                document.querySelectorAll('.main-content p').forEach(p => p.style.display = 'block');
                document.querySelector('.main-content h1').style.display = 'block';
                document.querySelector('.comment-section').style.display = 'block';
                
                // 恢复原始背景
                document.body.style.backgroundImage = '';
                
                // 显示原始按钮
                btn.style.display = 'block';
                
                // 移除新按钮
                this.remove();
            };
        });
        
        // 将新按钮添加到页面
        document.body.appendChild(newBtn);
        
        console.log('图片和背景已更新');
    } catch (error) {
        console.error('发生错误:', error);
    }
});

