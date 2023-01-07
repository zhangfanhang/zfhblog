const desc = document.querySelector('.description')
const url = 'https://v.api.aa1.cn/api/time-tx/index.php'
const xhr = new XMLHttpRequest()
xhr.addEventListener(
  'load',
  () => {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      desc.innerText = xhr.response.nxyj
    }
  },
  false
)
xhr.responseType = 'json'
xhr.open('GET', url, true)
xhr.send()
