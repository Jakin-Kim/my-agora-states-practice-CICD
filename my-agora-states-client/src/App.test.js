describe("vercel 배포 시 테스트 통과", () => {
    test("테스트 오류", () => {
        throw new Error('에러발생');
    })
});

