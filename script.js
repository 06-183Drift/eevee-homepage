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

// 等待页面加载完成后再执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮和图片元素
    const btn = document.getElementById('btn');
    const img = document.getElementById('myImage');
    const bgMusic = document.getElementById('bgMusic');
    const eeveeImage = document.querySelector('.eevee-image'); // 使用新的类名选择器

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
    console.log('伊布樱花图片元素:', eeveeImage);

    // 添加伊布樱花图片的点击事件
    if (eeveeImage) {
        eeveeImage.addEventListener('click', function() {
            console.log('伊布樱花图片被点击');
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
                    scaryImage.src = '恐怖伊布.png';
                    
                    // 添加图片加载事件监听
                    scaryImage.addEventListener('load', function() {
                        console.log('恐怖伊布图片加载成功');
                    });
                    
                    scaryImage.addEventListener('error', function(e) {
                        console.error('恐怖伊布图片加载失败:', e);
                    });
                    
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

                    // 确保图片显示在最上层
                    scaryImage.style.zIndex = '9999';
                    
                    document.body.appendChild(scaryImage);
                }, 500); // 等待0.5秒后显示恐怖伊布
            }, images.length * 1200 + 1200); // 等待所有正常伊布显示完成后再等待1.2秒
        });
    } else {
        console.error('未找到伊布樱花图片元素');
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

