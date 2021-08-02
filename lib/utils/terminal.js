/**
 * 执行终端命令相关的代码
 */



// 衍生子进程
const { spawn } = require('child_process')

const commandSpawn = (...args) => {
  return new Promise((resolve,reject) => {
    const childProcess = spawn(...args)

    // 显示安装进程
    childProcess.stdout.pipe(process.stdout)
  
    // 显示安装错误信息
    childProcess.stderr.pipe(process.stderr)
  
    // 监听是否安装完成
    childProcess.on('close', () => {
      resolve()
    })
  })
}



module.exports = {
  commandSpawn
}

