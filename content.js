'use strict'
/**
*  RARBG Thumbnails extension.
*/

let tables = document.querySelectorAll('table.lista2t')

function addThumbnailColumn (table) {

  let headerColumn = document.createElement('td')
  headerColumn.setAttribute('class', 'header6 header40')
  headerColumn.style.width = '100px'
  headerColumn.style.backgroundColor = '#3860bb'
  headerColumn.style.cursor = 'default'
  headerColumn.innerText = 'Thumbnail'
  table.rows[0].insertBefore(headerColumn, table.rows[0].cells[1])

  Array.from(table.rows).forEach((row, i) => {
    if (i === 0) return

    let link = row.querySelector('a[title]')
    let mouseoverAttr = link.getAttribute('onmouseover')

    let thumbColumn = document.createElement('td')
    thumbColumn.style.textAlign = 'center'

    if (mouseoverAttr) {
      let matches = mouseoverAttr.match(/src=\\'(.*)?\\'/)

      if (matches.length !== 2) {
        console.error('Could not match image source on link: ', link, mouseoverAttr)
        return
      }

      let thumbImage = new Image()
      thumbImage.style.maxHeight = '150px'
      thumbImage.style.width = '100%'
      thumbImage.style.minHeight = '25px'
      thumbImage.style.objectFit = 'cover'
      thumbImage.src = matches[1]

      let thumbLink = document.createElement('a')
      thumbLink.href = link.href
      thumbLink.style.display = 'block'
      thumbLink.style.maxWidth = '100px'
      thumbLink.style.width = '100%'
      thumbLink.style.overflow = 'hidden'
      thumbLink.appendChild(thumbImage)

      thumbColumn.appendChild(thumbLink)
    }

    row.insertBefore(thumbColumn, link.parentNode)
  })
}

tables.forEach(addThumbnailColumn)
