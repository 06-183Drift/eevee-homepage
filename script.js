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
const bgMusic = document.getElementById('bgMusic');
const eeveeImage = document.querySelector('.image-container img'); // 获取伊布樱花图片

// 设置最大音量
bgMusic.volume = 1.0; // 1.0 是最大音量

// 添加音乐加载事件监听
bgMusic.addEventListener('loadeddata', function() {
    console.log('音乐文件已加载');
});

bgMusic.addEventListener('error', function(e) {
    console.error('音乐加载错误:', e);
});

// 检查元素是否正确获取
console.log('按钮元素:', btn);
console.log('图片元素:', img);
console.log('音乐元素:', bgMusic);

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
        
        // 播放背景音乐
        bgMusic.play();
        
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
                // 清除星星动画
                clearStars();
                
                // 恢复所有隐藏的内容
                document.querySelector('.image-container').style.display = 'block';
                document.querySelectorAll('.main-content p').forEach(p => p.style.display = 'block');
                document.querySelector('.main-content h1').style.display = 'block';
                document.querySelector('.comment-section').style.display = 'block';
                
                // 恢复原始背景
                document.body.style.backgroundImage = '';
                
                // 停止背景音乐
                bgMusic.pause();
                bgMusic.currentTime = 0;
                
                // 创建原始按钮
                const originalBtn = document.createElement('button');
                originalBtn.id = 'btn';
                originalBtn.textContent = '來看看我去哪里玩';
                originalBtn.style.cssText = `
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
                
                // 添加按钮的悬停效果
                originalBtn.addEventListener('mouseover', function() {
                    this.style.backgroundColor = '#45a049';
                    this.style.transform = 'translateX(-50%) scale(1.1)';
                });
                
                originalBtn.addEventListener('mouseout', function() {
                    this.style.backgroundColor = '#4CAF50';
                    this.style.transform = 'translateX(-50%) scale(1)';
                });
                
                // 添加按钮的点击事件
                originalBtn.addEventListener('click', function() {
                    // 隐藏不需要的内容
                    document.querySelector('.image-container').style.display = 'none';
                    document.querySelectorAll('.main-content p').forEach(p => p.style.display = 'none');
                    document.querySelector('.main-content h1').style.display = 'none';
                    document.querySelector('.comment-section').style.display = 'none';
                    
                    // 显示图片并调整位置
                    const img = document.getElementById('myImage');
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
                    
                    // 播放背景音乐
                    bgMusic.play();
                    
                    // 隐藏按钮
                    this.style.display = 'none';
                    
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
                            // 清除星星动画
                            clearStars();
                            
                            // 恢复所有隐藏的内容
                            document.querySelector('.image-container').style.display = 'block';
                            document.querySelectorAll('.main-content p').forEach(p => p.style.display = 'block');
                            document.querySelector('.main-content h1').style.display = 'block';
                            document.querySelector('.comment-section').style.display = 'block';
                            
                            // 恢复原始背景
                            document.body.style.backgroundImage = '';
                            
                            // 停止背景音乐
                            bgMusic.pause();
                            bgMusic.currentTime = 0;
                            
                            // 显示原始按钮并恢复文字
                            originalBtn.style.display = 'block';
                            originalBtn.textContent = '來看看我去哪里玩';
                            
                            // 移除新按钮
                            this.remove();
                        };
                    });
                    
                    // 将新按钮添加到页面
                    document.body.appendChild(newBtn);
                });
                
                // 将原始按钮添加到页面
                document.body.appendChild(originalBtn);
                
                // 移除快跑按钮
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

// 创建星星动画
function createStars() {
    const container = document.getElementById('animation-container');
    const numberOfStars = 50; // 星星数量

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // 随机位置
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // 随机大小
        const size = Math.random() * 3 + 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // 随机动画延迟
        star.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(star);
    }
}

// 清除星星动画
function clearStars() {
    const container = document.getElementById('animation-container');
    container.innerHTML = '';
}

// 添加伊布樱花图片的点击事件
eeveeImage.addEventListener('click', function() {
    // 存储已使用的位置
    const usedPositions = new Set();

    // 创建并显示图片的函数
    function createAndShowImage(imageNumber) {
        const lookImage = document.createElement('img');
        lookImage.src = imageNumber === '' ? '伊布看你.jpg' : `伊布看你${imageNumber}.jpg`;
        
        lookImage.style.cssText = `
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            max-width: 800px;
            width: auto;
            height: auto;
            z-index: 1000;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            opacity: 0;
            animation: fadeIn 0.3s forwards;
        `;

        // 将图片添加到页面
        document.body.appendChild(lookImage);

        // 1.2秒后淡出并移除
        setTimeout(() => {
            lookImage.style.transition = 'opacity 0.5s';
            lookImage.style.opacity = '0';
            setTimeout(() => {
                lookImage.remove();
            }, 500);
        }, 1200);

        return lookImage;
    }

    // 添加动画的CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes grow {
            from { transform: scale(1); }
            to { transform: scale(2); }
        }
        @keyframes darkenBackground {
            from { background-color: rgba(0,0,0,0); }
            to { background-color: rgba(0,0,0,0.8); }
        }
    `;
    document.head.appendChild(style);

    // 存储所有创建的图片
    const createdImages = [];

    // 依次显示正常伊布图片
    const images = ['', 2, 3, 4, 5, 6, 7, 8];
    images.forEach((num, index) => {
        setTimeout(() => {
            const img = createAndShowImage(num);
            createdImages.push(img);
        }, index * 1200); // 1.2秒间隔
    });

    // 在最后一张图片显示后等待1.2秒，然后清除所有内容并显示恐怖伊布
    setTimeout(() => {
        // 立即将背景变为黑色，并移除之前的背景图片
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = '#000';
        document.body.style.transition = 'background-color 0.3s';

        // 隐藏所有原有物件
        document.querySelectorAll('.main-content, .comment-section, .image-container, #animation-container').forEach(el => {
            el.style.display = 'none';
        });

        // 等待0.5秒后显示恐怖伊布
        setTimeout(() => {
            // 创建恐怖伊布
            const scaryImage = document.createElement('img');
            scaryImage.src = '恐怖伊布.PNG';
            
            scaryImage.style.cssText = `
                position: fixed;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0.1);
                max-width: 800px;
                width: auto;
                height: auto;
                z-index: 1000;
                opacity: 0;
                animation: floatIn 2s forwards;
                filter: brightness(0.8) contrast(1.2);
                cursor: pointer;
                transition: transform 0.2s;
            `;

            // 添加浮现动画
            const style = document.createElement('style');
            style.textContent = `
                @keyframes floatIn {
                    0% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.1);
                    }
                    50% {
                        opacity: 0.5;
                        transform: translate(-50%, -50%) scale(0.5);
                    }
                    100% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
            `;
            document.head.appendChild(style);

            // 添加悬停效果
            scaryImage.addEventListener('mouseover', function() {
                this.style.transform = 'translate(-50%, -50%) scale(1.05)';
            });

            scaryImage.addEventListener('mouseout', function() {
                this.style.transform = 'translate(-50%, -50%) scale(1)';
            });

            // 添加点击事件
            scaryImage.addEventListener('click', function() {
                // 移除恐怖伊布
                this.style.opacity = '0';

                // 等待图片淡出后跳转
                setTimeout(() => {
                    // 移除恐怖伊布元素
                    this.remove();
                    
                    // 更换背景图片
                    document.body.style.backgroundImage = 'url("伊布神壇.png")';
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundPosition = 'center';
                    document.body.style.backgroundAttachment = 'fixed';
                    document.body.style.backgroundRepeat = 'no-repeat';
                    
                    // 重置背景颜色
                    document.body.style.backgroundColor = '';
                }, 500);
            });

            document.body.appendChild(scaryImage);
        }, 500); // 等待0.5秒后显示恐怖伊布
    }, images.length * 1200 + 1200); // 等待所有正常伊布显示完成后再等待1.2秒
});

