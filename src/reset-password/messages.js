import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'sign.in': {
    id: 'sign.in',
    defaultMessage: 'Đăng nhập',
    description: 'Văn bản chuyển đổi Đăng nhập',
  },
  'reset.password.page.title': {
    id: 'reset.password.page.title',
    defaultMessage: 'Đặt lại mật khẩu | {siteName}',
    description: 'tiêu đề trang',
  },
  'reset.password': {
    id: 'reset.password',
    defaultMessage: 'Đặt lại mật khẩu',
    description: 'Tiêu đề trang và văn bản nút cho trang đặt lại mật khẩu.',
  },
  'reset.password.page.instructions': {
    id: 'reset.password.page.instructions',
    defaultMessage: 'Nhập và xác nhận mật khẩu mới của bạn.',
    description: 'Thông báo hướng dẫn cho trang đặt lại mật khẩu.',
  },
  'new.password.label': {
    id: 'new.password.label',
    defaultMessage: 'Mật khẩu mới',
    description: 'Nhãn trường mật khẩu mới cho trang đặt lại mật khẩu.',
  },
  'confirm.password.label': {
    id: 'confirm.password.label',
    defaultMessage: 'Xác nhận mật khẩu',
    description: 'Nhãn trường xác nhận mật khẩu cho trang đặt lại mật khẩu.',
  },
  // validation errors
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'Mật khẩu chưa đáp ứng tiêu chí',
    description: 'Thông báo lỗi cho mật khẩu trống hoặc không hợp lệ',
  },
  'passwords.do.not.match': {
    id: 'passwords.do.not.match',
    defaultMessage: 'Mật khẩu không khớp',
    description: 'Lỗi định dạng mật khẩu.',
  },
  'confirm.your.password': {
    id: 'confirm.your.password',
    defaultMessage: 'Xác nhận mật khẩu của bạn',
    description: 'Thông báo xác thực trường khi trường xác nhận mật khẩu bị trống',
  },
  // alert banner strings
  'reset.password.failure.heading': {
    id: 'reset.password.failure.heading',
    defaultMessage: 'Chúng tôi không thể đặt lại mật khẩu của bạn.',
    description: 'Tiêu đề cho yêu cầu đặt lại mật khẩu thất bại',
  },
  'reset.password.form.submission.error': {
    id: 'reset.password.form.submission.error',
    defaultMessage: 'Vui lòng kiểm tra lại các phản hồi của bạn và thử lại.',
    description: 'Thông báo lỗi cho trang đặt lại mật khẩu',
  },
  'reset.server.rate.limit.error': {
    id: 'reset.server.rate.limit.error',
    defaultMessage: 'Quá nhiều yêu cầu.',
    description: 'Quá nhiều yêu cầu tại điểm cuối máy chủ',
  },
  'reset.password.success.heading': {
    id: 'reset.password.success.heading',
    defaultMessage: 'Hoàn tất đặt lại mật khẩu.',
    description: 'Tiêu đề cho hộp cảnh báo khi đặt lại mật khẩu thành công',
  },
  'reset.password.success': {
    id: 'reset.password.success',
    defaultMessage: 'Mật khẩu của bạn đã được đặt lại. Đăng nhập vào tài khoản của bạn.',
    description: 'Thông báo đặt lại mật khẩu thành công',
  },
  'internal.server.error': {
    id: 'internal.server.error',
    defaultMessage: 'Đã xảy ra lỗi. Vui lòng thử làm mới trang hoặc kiểm tra kết nối internet của bạn.',
    description: 'Thông báo lỗi xuất hiện khi máy chủ phản hồi với mã lỗi 500',
  },
  'rate.limit.error': {
    id: 'rate.limit.error',
    defaultMessage: 'Đã xảy ra lỗi do có quá nhiều yêu cầu. Vui lòng thử lại sau.',
    description: 'Thông báo lỗi xuất hiện khi máy chủ phản hồi với mã lỗi 429',
  },
});

export default messages;