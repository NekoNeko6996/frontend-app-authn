import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'forgot.password.page.title': {
    id: 'forgot.password.page.title',
    defaultMessage: 'Quên mật khẩu | {siteName}',
    description: 'tiêu đề trang quên mật khẩu',
  },
  'forgot.password.page.heading': {
    id: 'forgot.password.page.heading',
    defaultMessage: 'Đặt lại mật khẩu',
    description: 'Tiêu đề trang cho trang quên mật khẩu.',
  },
  'forgot.password.page.instructions': {
    id: 'forgot.password.page.instructions',
    defaultMessage: 'Vui lòng nhập địa chỉ email của bạn bên dưới và chúng tôi sẽ gửi cho bạn một email hướng dẫn cách đặt lại mật khẩu.',
    description: 'Thông báo hướng dẫn cho trang quên mật khẩu.',
  },
  'forgot.password.page.invalid.email.message': {
    id: 'forgot.password.page.invalid.email.message',
    defaultMessage: 'Nhập một địa chỉ email hợp lệ',
    description: 'Thông báo địa chỉ email không hợp lệ cho trường nhập liệu.',
  },
  'forgot.password.page.email.field.label': {
    id: 'forgot.password.page.email.field.label',
    defaultMessage: 'Email',
    description: 'Nhãn trường email cho trang quên mật khẩu.',
  },
  'forgot.password.page.submit.button': {
    id: 'forgot.password.page.submit.button',
    defaultMessage: 'Gửi',
    description: 'Văn bản nút Gửi cho trang quên mật khẩu.',
  },
  'forgot.password.error.alert.title': {
    id: 'forgot.password.error.alert.title.',
    defaultMessage: 'Chúng tôi không thể liên hệ với bạn.',
    description: 'Không thể gửi email khôi phục mật khẩu.',
  },
  'forgot.password.error.message.title': {
    id: 'forgot.password.error.message.title',
    defaultMessage: 'Đã xảy ra lỗi.',
    description: 'Tiêu đề cho thông báo xuất hiện khi xảy ra lỗi trên trang hỗ trợ mật khẩu',
  },
  'forgot.password.request.in.progress.message': {
    id: 'forgot.password.request.in.progress.message',
    defaultMessage: 'Yêu cầu trước đó của bạn đang được xử lý, vui lòng thử lại sau giây lát.',
    description: 'Thông báo hiển thị khi yêu cầu đặt lại mật khẩu trước đó vẫn đang được xử lý.',
  },
  'forgot.password.empty.email.field.error': {
    id: 'forgot.password.empty.email.field.error',
    defaultMessage: 'Nhập email của bạn',
    description: 'Thông báo lỗi xuất hiện khi người dùng cố gắng gửi trường email trống',
  },
  'forgot.password.email.help.text': {
    id: 'forgot.password.email.help.text',
    defaultMessage: 'Địa chỉ email bạn đã sử dụng để đăng ký với {platformName}',
    description: 'văn bản trợ giúp cho email',
  },
  // Confirmation Alert Message
  'confirmation.message.title': {
    id: 'confirmation.message.title',
    defaultMessage: 'Kiểm tra email của bạn',
    description: 'Tiêu đề thông báo xác nhận quên mật khẩu',
  },
  'confirmation.support.link': {
    id: 'confirmation.support.link',
    defaultMessage: 'liên hệ hỗ trợ kỹ thuật',
    description: 'Văn bản liên kết hỗ trợ kỹ thuật',
  },
  'need.help.sign.in.text': {
    id: 'need.help.sign.in.text',
    defaultMessage: 'Cần trợ giúp đăng nhập?',
    description: 'Liên kết trợ giúp đăng nhập trên trang quên mật khẩu',
  },
  'additional.help.text': {
    id: 'additional.help.text',
    defaultMessage: 'Để được trợ giúp thêm, hãy liên hệ bộ phận hỗ trợ {platformName} tại ',
    description: 'văn bản trợ giúp thêm trên trang quên mật khẩu',
  },
  'sign.in.text': {
    id: 'sign.in.text',
    defaultMessage: 'Đăng nhập',
    description: 'liên kết trang đăng nhập trên trang mật khẩu',
  },
  'extend.field.errors': {
    id: 'extend.field.errors',
    defaultMessage: '{emailError} bên dưới.',
    description: 'mở rộng lỗi trường cho thông báo cảnh báo',
  },
  // Reset password token validation failure
  'invalid.token.heading': {
    id: 'invalid.token.heading',
    defaultMessage: 'Liên kết đặt lại mật khẩu không hợp lệ',
    description: 'Tiêu đề cảnh báo khi liên kết đặt lại mật khẩu không hợp lệ',
  },
  'invalid.token.error.message': {
    id: 'invalid.token.error.message',
    defaultMessage: 'Liên kết đặt lại mật khẩu này không hợp lệ. Có thể nó đã được sử dụng. Nhập email của bạn bên dưới để nhận liên kết mới.',
    description: 'Thông báo cảnh báo khi liên kết đặt lại mật khẩu đã hết hạn hoặc không hợp lệ',
  },
  'token.validation.rate.limit.error.heading': {
    id: 'token.validation.rate.limit.error.heading',
    defaultMessage: 'Quá nhiều yêu cầu',
    description: 'Quá nhiều yêu cầu tại điểm cuối máy chủ',
  },
  'token.validation.rate.limit.error': {
    id: 'token.validation.rate.limit.error',
    defaultMessage: 'Đã xảy ra lỗi do có quá nhiều yêu cầu. Vui lòng thử lại sau.',
    description: 'Thông báo lỗi xuất hiện khi máy chủ phản hồi với mã lỗi 429',
  },
  'token.validation.internal.sever.error.heading': {
    id: 'token.validation.internal.sever.error.heading',
    defaultMessage: 'Xác thực token thất bại',
    description: 'Thông báo lỗi xác thực token đặt lại mật khẩu thất bại.',
  },
  'token.validation.internal.sever.error': {
    id: 'token.validation.internal.sever.error',
    defaultMessage: 'Đã xảy ra lỗi. Vui lòng thử làm mới trang hoặc kiểm tra kết nối internet của bạn.',
    description: 'Thông báo lỗi xuất hiện khi máy chủ phản hồi với mã lỗi 500',
  },
  // Error messages
  'internal.server.error': {
    id: 'internal.server.error',
    defaultMessage: 'Đã xảy ra lỗi. Vui lòng thử làm mới trang hoặc kiểm tra kết nối internet của bạn.',
    description: 'Thông báo lỗi xuất hiện khi máy chủ phản hồi với mã lỗi 500',
  },
});
export default messages;