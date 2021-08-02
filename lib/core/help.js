const program = require('commander')

const helpOptions = () => {
  // 添加自己的 option
  program.option('-d --dest <dest>', 'a destination folder,例如：-d /src/components')
  program.option('-f --framework <framework>', 'your framework')

  // 监听指令
  program.on('--help', function () {
    console.log("");
    console.log("other：");
    console.log("  other options~");
  })
}

module.exports = helpOptions