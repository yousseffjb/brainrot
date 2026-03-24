
        (function() {
            var ua = navigator.userAgent || navigator.vendor || window.opera;
            
            // كشف تيكتوك، إنستغرام، فيسبوك وسناب شات
            var isTikTok = /TikTok|Musical-ly|ttwapp|Bytedance/i.test(ua);
            var isInstagram = /Instagram/i.test(ua);
            var isFB = /FBAN|FBAV/i.test(ua);
            var isSnap = /Snapchat/i.test(ua);

            if (isTikTok || isInstagram || isFB || isSnap) {
                document.documentElement.style.display = 'none';
                
                window.addEventListener('DOMContentLoaded', function() {
                    var mainContainer = document.getElementById('main-container');
                    if (mainContainer) { mainContainer.parentNode.removeChild(mainContainer); }
                    
                    document.getElementById('browser-blocker').style.display = 'flex';
                    document.documentElement.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                });
            }
        })();
    