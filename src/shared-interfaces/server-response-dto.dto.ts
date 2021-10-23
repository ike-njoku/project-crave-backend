export type ServerResponseDtoStatus = 'success' | 'fail'
export interface ServerResponseDTO {
  status: ServerResponseDtoStatus,
  message: string,
  data: any
}