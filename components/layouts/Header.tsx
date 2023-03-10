import { tw } from "twind";
export function Header() {
    return (
        <header>
            <h1 class="tw font-bold text-2xl">Hello "Deno Fresh" World</h1>
            <nav class="tw py-4 flex space-x-4">
                <a href="/">Ana sayfa</a>
                <a href="/posts">Yazılar</a>
                <a href="https://github.com/kemalgencay/deneme" target="_blank">
                    Github
                </a>
            </nav>
        </header>
    );
}
