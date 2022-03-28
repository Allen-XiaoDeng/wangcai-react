module.exports = {
  apps: [
    {
      name: 'wangcai-react',
      script: 'wangcai-server.js'
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '42.192.91.89',
      ref: 'origin/main',
      repo: 'git@github.com:Allen-XiaoDeng/wangcai-react.git',
      path: '/workspace/wangcai-react',
      'post-deploy': 'git reset --hard && git checkout main && git pull && yarn install  --production=false && pm2 startOrReload ecosystem.config.js', // -production=false 下载全量包
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}