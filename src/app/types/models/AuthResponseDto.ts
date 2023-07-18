export interface AuthResponseDto {
    token: string,
    refreshToken: string,
    expirationTokenDateTime: string,
    hasError: boolean
}