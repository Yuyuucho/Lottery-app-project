import Link from "next/link";
export default function Enter() {
    return(
        <div>
            <h2>部屋に入る</h2>
            <div>
                <form action="/enter" method="post">                
                    <p>パスワード</p>
                    <input type='text' name='username' />
                    <input type="text" name="roompass" /*maxlength="8"*/ />
                    <input type="submit" value="入室する" />
                    <Link href="/">TOPに戻る</Link>            
                </form>
            </div>
        </div>
    )
}