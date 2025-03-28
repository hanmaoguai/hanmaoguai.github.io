import { readdirSync, writeFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import { join } from 'path'
import { marked } from 'marked'

marked.use({
  // 开启异步渲染
  async: true,
  pedantic: false,
  gfm: true,
  mangle: false,
  headerIds: false,
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// 定义 Markdown 文件夹路径
const markdownFolderPath = join(__dirname, '../articles') // 假设 markdown 文件夹位于项目根目录
// 提取标题和第一段文字
function extractTitleAndFirstParagraph(markdownContent) {
  let title = ''
  let firstParagraph = ''
  // 使用正则表达式匹配标题
  const titleMatch = markdownContent.match(/^#\s+(.*)/m)
  if (titleMatch) {
    title = titleMatch[1].trim() // 提取标题内容
  }
  // 使用正则表达式匹配第一段文字
  const paragraphMatch = markdownContent.match(/^(?!#)(\S.*?)(\n\n|\r\n\r\n|$)/ms)
  if (paragraphMatch) {
    firstParagraph = paragraphMatch[1].trim() // 提取第一段文字
  }
  return { title, firstParagraph }
}

// 递归读取文件夹内容
function readMarkdownFiles(dirPath) {
  const items = readdirSync(dirPath, { withFileTypes: true })
  const result = []

  for (const item of items) {
    const fullPath = join(dirPath, item.name)
    if (item.isDirectory()) {
      // 如果是文件夹，则递归读取子文件夹内容
      result.push({
        folder: item.name,
        files: readMarkdownFiles(fullPath),
      })
    } else if (item.isFile() && item.name.endsWith('.md')) {
      const markdownContent = fs.readFileSync(fullPath, 'utf-8')
      const { title, firstParagraph } = extractTitleAndFirstParagraph(markdownContent)
      // 如果是 Markdown 文件，则记录文件名
      marked
        .parse(fs.readFileSync(fullPath, 'utf-8'), {
          async: true,
        })
        .then((html) => {
          console.log(html)
        })
      result.push({
        file: item.name.replace('.md', ''), // 去掉 .md 后缀
        path: fullPath,
        title,
        firstParagraph,
      })
    }
  }
  return result
}

// 将结果保存为 JSON 文件
function saveAsJson(data, outputPath) {
  writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8')
  console.log(`JSON 文件已生成：${outputPath}`)
}

// 主函数
function main() {
  try {
    // 检查 Markdown 文件夹是否存在
    if (!existsSync(markdownFolderPath)) {
      console.error(`Markdown 文件夹不存在: ${markdownFolderPath}`)
      return
    }
    // 读取 Markdown 文件夹内容
    const markdownData = readMarkdownFiles(markdownFolderPath)
    // 保存为 JSON 文件
    const jsonOutputPath = join(__dirname, '../markdown-info.json')
    saveAsJson(markdownData, jsonOutputPath)
  } catch (error) {
    console.error('发生错误:', error)
  }
}

main()
