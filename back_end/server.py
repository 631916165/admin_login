import traceback
import secrets
import jwt
from flask import Flask, request, jsonify
import pymysql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# 连接到MySQL数据库
conn = pymysql.connect(
host='127.0.0.1',
    user='root',
    password='123456',
    database='admin',
    cursorclass=pymysql.cursors.DictCursor
)
# 创建数据库游标
cursor = conn.cursor()



#登录功能api
@app.route('/api/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    # username = data['username']
    # password = data['password']
    print(username)
    print(password)

    query = "SELECT * FROM user WHERE username = %s AND password = %s"
    #执行sql语句
    cursor.execute(query,(username, password))
    print(query)
    result = cursor.fetchone()
    print(result)

    if result:
        # 验证成功
        #生成token
        token = secrets.token_hex(16) + username
        return jsonify({'success': True , 'token':token})
    else:
        # 验证失败
        return jsonify({'success': False})

if __name__ == '__main__':
    app.run()
