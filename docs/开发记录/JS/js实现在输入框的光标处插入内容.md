---
title: js实现在输入框的光标处插入内容
---

```js
    //在光标处插入文字   field获取标签ID,value要插入的字符
    insertText(field, value) {
      if (field.selectionStart || field.selectionStart === "0") {
        const startPos = field.selectionStart
        const endPos = field.selectionEnd
        // 保存滚动条
        const restoreTop = field.scrollTop
        field.value = field.value.substring(0, startPos) + value + field.value.substring(endPos, field.value.length)
        if (restoreTop > 0) {
          field.scrollTop = restoreTop
        }
        field.focus()
        field.selectionStart = startPos + value.length
        field.selectionEnd = startPos + value.length
      } else {
        field.value += value
        field.focus()
      }
    },
```

