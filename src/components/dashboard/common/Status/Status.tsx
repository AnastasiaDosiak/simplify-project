export default function Status({ isActive }: { isActive: boolean }) {
    if (isActive) {
        return (
            <div className="sm:bg-lightGreen bg-none rounded-full px-2 py-0.5 text-green font-semibold sm:text-base text-sm sm:w-[3.6rem] w-[2rem]">
                Active
            </div>
        );
    } else {
        return (
            <div className="sm:bg-lightRed bg-none rounded-full px-2 py-0.5 text-red font-semibold sm:text-base text-sm sm:w-[5.4rem] w-[2rem]">
                Not active
            </div>
        );
    }
}
