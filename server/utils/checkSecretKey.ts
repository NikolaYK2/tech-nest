export default function checkSecretKey(): string {
  if (!process.env.SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined');
  }
  return process.env.SECRET_KEY;
}
