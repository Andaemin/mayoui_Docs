import { MayoBtn } from "@mayoui/ui";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex w-full max-w-3xl flex-row items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs font-bold text-4xl">🧪 MayoUI</h1>
                    <h1 className="max-w-sm text-3xl font-semibold leading-11 tracking-normal text-black dark:text-zinc-50">
                        한국인이 쓰기 편한 UI를 위해
                    </h1>
                    <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        저희는 가독성과 심미성을 높이기 위해{" "}
                        <a
                            href="https://toss.im/tossface?srsltid=AfmBOoo8j8SGrvPCybTH9kensHk7Je-EnSyS0kXF2nPRmcPNLxqyYCnr"
                            className="font-semibold text-zinc-950 dark:text-zinc-50 "
                        >
                            TossFaceFont
                        </a>{" "}
                        와{" "}
                        <a href="https://noonnu.cc/font_page/694" className="font-semibold text-zinc-950 dark:text-zinc-50">
                            Pretendard
                        </a>{" "}
                        폰트를 사용 했습니다.
                    </p>
                    <Link href="https://www.naver.com">
                        <MayoBtn variant="primary">Click Me</MayoBtn>
                    </Link>
                </div>
                <Image src="/Image/Daemintossface.png" width={800} height={600} className="w-64 h-auto" />
            </main>
        </div>
    );
}
