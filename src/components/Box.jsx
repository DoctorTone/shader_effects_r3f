
export const Box = () => {
    return (
        <mesh>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    )
}
