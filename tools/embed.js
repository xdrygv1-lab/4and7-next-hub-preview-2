/* 허브 안(iframe)에서 열렸을 때: 도구끼리 이동은 허브 화면 주소(#)로 바꿔 허브 메뉴가 같이 움직이게 함 */
(function(){
  if (window.top === window) return;
  var root = document.documentElement; root.classList.add('embed');
  var MAP = {'uw-calc.html':'tool-uw','checklist.html':'tool-check','library.html':'tool-lib','downloads.html':'tool-dl','simulator.html':'tool-sim','ap-generator.html':'tool-ap','roleplay.html':'tool-rp','mbti.html':'tool-mbti'};
  var st = document.createElement('style'); st.textContent = '.embed header.top .brand{display:none}'; document.head.appendChild(st);
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    var href = a.getAttribute('href') || '', m;
    try {
      if ((m = href.match(/index\.html(#.*)?$/))) { e.preventDefault(); top.location.hash = m[1] || '#home'; return; }
      if ((m = href.match(/^([\w-]+\.html)(\?.*)?$/)) && MAP[m[1]]) { e.preventDefault(); top.location.hash = '#' + MAP[m[1]] + (m[2] || ''); }
    } catch (err) {}
  });
})();
