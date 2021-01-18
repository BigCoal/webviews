
echo "开始拉取项目:前段技术文档"
git pull origin master
npm run docs:build
echo "项目拉取成功"

#判断pm2进程是否存在，存在重启，不存在新建
if pm2 ls | grep techDocument
then pm2 restart techDocument
echo "重新启动项目！"
else pm2 start   npm --name techDocument -- run node:pro 
echo "创建新的项目"
fi

echo "结束"


