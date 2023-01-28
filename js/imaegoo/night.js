/*
 * @Author: CrazyChenzi
 * @Date: 2021-01-06 17:52:19
 * @LastEditTime: 2021-09-17 14:11:41
 * @LastEditors: CrazyChenzi
 * @Description: 
 * @FilePath: /nblogs/themes/icarus/source/js/imaegoo/night.js
 * @symbol_custom_string_obkoroi: 1 和 99 之间的差别再大，也不如 0 和 1 之间的差别大
 */
(function() {
  /**
   * Icarus 夜间模式 by iMaeGoo
   * https://www.imaegoo.com/
   */ 
  var isNight = localStorage.getItem('night') || window.matchMedia('(prefers-color-scheme: dark)').matches;
  var nightNav;

  function applyNight(value) {
    if (value.toString() === 'true') {
      document.body.classList.remove('white');
        document.body.classList.add('night');
        // if (document.querySelector('.snow-container')) {
        //     document.querySelector('.snow-container').setAttribute("style", "z-index: 0")
        // }
    } else {
        document.body.classList.remove('night');
        document.body.classList.add('white');
        //  if (document.querySelector('.snow-container')) {
        //     document.querySelector('.snow-container').setAttribute("style", "z-index: 10001")
        //  }
    }
    searchDisqusThread(value.toString())
  }

  function searchDisqusThread(value) {
      if (document.querySelector('#disqus_thread')) {
          if (value === 'true') {
            document.querySelector('#disqus_thread').parentNode.parentNode.setAttribute("style", "background: #b5b5b5b8")
          } else {
            document.querySelector('#disqus_thread').parentNode.parentNode.setAttribute("style", "background: #FFFFFF")
          }
      } else {
          var clearTime = setTimeout(() => {
            searchDisqusThread(value)
            clearTimeout(clearTime)  
          })
      }
  }

  function findNightNav() {
      nightNav = document.getElementById('night-nav');
      var switchFontEle = document.getElementById('switch-font')
      if (!nightNav || !switchFontEle) {
          setTimeout(findNightNav, 100);
      } else {
          nightNav.addEventListener('click', switchNight);
          switchFontEle.addEventListener('click', switchFont);
      }
  }

  function switchNight() {
      isNight = isNight ? isNight.toString() !== 'true' : true;
      applyNight(isNight);
      localStorage.setItem('night', isNight);
  }

  function switchFont() {
      var isTraditional = localStorage.getItem('traditional') || 'false'
      if (isTraditional === 'false') {
        document.body.setAttribute('style', 'font-variant-east-asian: traditional')
        localStorage.setItem('traditional', true)
      } else {
        document.body.setAttribute('style', 'font-variant-east-asian: normal')
        localStorage.setItem('traditional', false)
      }
  }

  findNightNav();
  isNight && applyNight(isNight);
}());