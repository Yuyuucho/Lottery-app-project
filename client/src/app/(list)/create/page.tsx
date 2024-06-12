import Link from 'next/link';
export default function Create(){
    return(
        <div>
            <h2>部屋を建てる</h2>
            <div>
        
                <form action="/create" method="post">
                    <p>部屋名</p>
                    <input type="text" name="roomname" />
                    <p>ニックネーム</p>            
                    <input type="text" name="username" />          
                    <p>パスワード</p>
                    <input type="password" name="roompass" /* maxの長さを8に指定したい */ />
                    <input type="submit" value="作成する" />
                    <Link href="/">TOPに戻る</Link>
                </form>
            </div>
        </div>
    )
}