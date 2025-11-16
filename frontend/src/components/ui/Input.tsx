

export function Input({onChange, placeholder }: {placeholder: string; onChange: () => void}) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 my-2 w-full rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition" onChange={onChange}
      />
    </div>
  );
}
