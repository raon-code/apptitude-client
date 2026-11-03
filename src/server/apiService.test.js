import { ApiError } from './apiService';

describe('ApiError.from', () => {
  it('uses the response status and server message', () => {
    const error = ApiError.from({
      message: 'Request failed with status code 409',
      response: { status: 409, data: { message: '이미 참여한 대결입니다.' } }
    });

    expect(error).toBeInstanceOf(ApiError);
    expect(error.name).toBe('ApiError');
    expect(error.status).toBe(409);
    expect(error.message).toBe('이미 참여한 대결입니다.');
    expect(error.cause).toBeDefined();
  });

  it('falls back to the axios message when the body has none', () => {
    const error = ApiError.from({
      message: 'Request failed with status code 500',
      response: { status: 500, data: {} }
    });

    expect(error.status).toBe(500);
    expect(error.message).toBe('Request failed with status code 500');
  });

  it('treats network failures as statusless errors', () => {
    const error = ApiError.from(new Error('Network Error'));

    expect(error.status).toBeNull();
    expect(error.message).toBe('Network Error');
  });
});
