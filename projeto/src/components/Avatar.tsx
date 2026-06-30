import "./Avatar.css";

interface AvatarProps {
  size?: number;
}

// Placeholder com as iniciais — trocar por <img src={...} /> quando a foto nova estiver definida.
export function Avatar({ size = 96 }: AvatarProps) {
  return (
    <div className="avatar-placeholder" style={{ width: size, height: size, fontSize: size * 0.36 }}>
      ED
    </div>
  );
}
