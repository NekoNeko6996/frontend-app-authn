import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'login.page.title': {
    id: 'login.page.title',
    defaultMessage: 'Đăng nhập | {siteName}',
    description: 'tiêu đề trang đăng nhập',
  },
  // Login labels
  'login.user.identity.label': {
    id: 'login.user.identity.label',
    defaultMessage: 'Tên người dùng hoặc email',
    description: 'Nhãn cho trường thông tin định danh người dùng để nhập tên người dùng hoặc email để đăng nhập',
  },
  'login.password.label': {
    id: 'login.password.label',
    defaultMessage: 'Mật khẩu',
    description: 'Nhãn cho trường mật khẩu',
  },
  'sign.in.button': {
    id: 'sign.in.button',
    defaultMessage: 'Đăng nhập',
    description: 'Nhãn nút đăng nhập xuất hiện trên trang đăng nhập',
  },
  'forgot.password': {
    id: 'forgot.password',
    defaultMessage: 'Quên mật khẩu',
    description: 'Văn bản nút cho [chức năng] quên mật khẩu',
  },
  'institution.login.button': {
    id: 'institution.login.button',
    defaultMessage: 'Thông tin đăng nhập của trường/cơ sở',
    description: 'hiển thị danh sách các trường',
  },
  'institution.login.page.title': {
    id: 'institution.login.page.title',
    defaultMessage: 'Đăng nhập bằng thông tin đăng nhập của trường/cơ sở',
    description: 'Tiêu đề của trang [đăng nhập] trường',
  },
  'institution.login.page.sub.heading': {
    id: 'institution.login.page.sub.heading',
    defaultMessage: 'Chọn trường của bạn từ danh sách bên dưới',
    description: 'Tiêu đề của danh sách các trường',
  },
  'non.compliant.password.title': {
    id: 'non.compliant.password.title',
    defaultMessage: 'Chúng tôi gần đây đã thay đổi yêu cầu về mật khẩu',
    description: 'Tiêu đề xuất hiện in đậm trước thông báo lỗi cho mật khẩu không tuân thủ',
  },
  'non.compliant.password.message': {
    id: 'non.compliant.password.message',
    defaultMessage: 'Mật khẩu hiện tại của bạn không đáp ứng các yêu cầu bảo mật mới. '
                      + 'Chúng tôi vừa gửi một tin nhắn đặt lại mật khẩu đến địa chỉ email liên kết với tài khoản này. '
                      + 'Cảm ơn bạn đã giúp chúng tôi giữ an toàn cho dữ liệu của bạn.',
    description: 'Thông báo lỗi cho mật khẩu không tuân thủ',
  },
  'account.locked.out.message.1': {
    id: 'account.locked.out.message.1',
    defaultMessage: 'Để bảo vệ tài khoản của bạn, tài khoản đã bị tạm thời khóa. Vui lòng thử lại sau 30 phút.',
    description: 'Một phần thông báo khi tài khoản người dùng bị khóa sau nhiều lần đăng nhập thất bại',
  },
  'username.or.email.format.validation.less.chars.message': {
    id: 'username.or.email.format.validation.less.chars.message',
    defaultMessage: 'Tên người dùng hoặc email phải có ít nhất 2 ký tự.',
    description: 'Thông báo xác thực xuất hiện khi tên người dùng hoặc địa chỉ email ít hơn 2 ký tự',
  },
  'email.validation.message': {
    id: 'email.validation.message',
    defaultMessage: 'Nhập tên người dùng hoặc email của bạn',
    description: 'Thông báo xác thực xuất hiện khi email bị trống',
  },
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'Nhập mật khẩu của bạn',
    description: 'Thông báo xác thực xuất hiện khi mật khẩu bị trống',
  },
  // Account Activation Strings
  'account.activation.success.message.title': {
    id: 'account.activation.success.message.title',
    defaultMessage: 'Thành công! Bạn đã kích hoạt tài khoản của mình.',
    description: 'Tiêu đề thông báo kích hoạt tài khoản thành công',
  },
  'account.activation.success.message': {
    id: 'account.activation.success.message',
    defaultMessage: 'Bây giờ bạn sẽ nhận được các cập nhật và thông báo qua email từ chúng tôi liên quan đến các khóa học bạn đã đăng ký. Đăng nhập để tiếp tục.',
    description: 'Thông báo hiển thị cho người học khi tài khoản của họ đã được kích hoạt thành công',
  },
  'account.activation.info.message': {
    id: 'account.activation.info.message',
    defaultMessage: 'Tài khoản này đã được kích hoạt.',
    description: 'Thông báo hiển thị khi tài khoản người học đã được kích hoạt',
  },
  'account.activation.error.message.title': {
    id: 'account.activation.error.message.title',
    defaultMessage: 'Không thể kích hoạt tài khoản của bạn',
    description: 'Tiêu đề thông báo lỗi kích hoạt tài khoản',
  },
  'account.activation.support.link': {
    id: 'account.activation.support.link',
    defaultMessage: 'liên hệ hỗ trợ',
    description: 'Văn bản liên kết được sử dụng trong thông báo lỗi kích hoạt tài khoản để đi đến trung tâm trợ giúp người học',
  },
  // Email Confirmation Strings
  'account.confirmation.success.message.title': {
    id: 'account.confirmation.success.message.title',
    defaultMessage: 'Thành công! Bạn đã xác nhận email của mình.',
    description: 'Tiêu đề thông báo xác minh tài khoản thành công',
  },
  'account.confirmation.success.message': {
    id: 'account.confirmation.success.message',
    defaultMessage: 'Đăng nhập để tiếp tục.',
    description: 'Thông báo hiển thị cho người học khi tài khoản của họ đã được kích hoạt thành công',
  },
  'account.confirmation.info.message': {
    id: 'account.confirmation.info.message',
    defaultMessage: 'Email này đã được xác nhận.',
    description: 'Thông báo hiển thị khi tài khoản người học đã được xác minh',
  },
  'account.confirmation.error.message.title': {
    id: 'account.confirmation.error.message.title',
    defaultMessage: 'Không thể xác nhận email của bạn',
    description: 'Tiêu đề thông báo lỗi xác minh tài khoản',
  },
  'tpa.account.link': {
    id: 'tpa.account.link',
    defaultMessage: 'Tài khoản {provider}',
    description: 'Văn bản liên kết thông báo lỗi được sử dụng để chuyển đến SSO khi người dùng nhân viên cố gắng đăng nhập bằng mật khẩu.',
  },
  'internal.server.error.message': {
    id: 'internal.server.error.message',
    defaultMessage: 'Đã xảy ra lỗi. Vui lòng thử làm mới trang hoặc kiểm tra kết nối internet của bạn.',
    description: 'Thông báo lỗi xuất hiện khi máy chủ phản hồi với mã lỗi 500',
  },
  'login.rate.limit.reached.message': {
    id: 'login.rate.limit.reached.message',
    defaultMessage: 'Quá nhiều lần đăng nhập thất bại. Vui lòng thử lại sau.',
    description: 'Thông báo lỗi xuất hiện khi người dùng ẩn danh đã thực hiện quá nhiều lần đăng nhập thất bại',
  },
  'login.failure.header.title': {
    id: 'login.failure.header.title',
    defaultMessage: 'Chúng tôi không thể đăng nhập cho bạn.',
    description: 'Thông báo tiêu đề đăng nhập thất bại.',
  },
  'contact.support.link': {
    id: 'contact.support.link',
    defaultMessage: 'liên hệ hỗd trợ {platformName}',
    description: 'Văn bản liên kết được sử dụng trong thông báo lỗi người dùng không hoạt động để đi đến trung tâm trợ giúp người học',
  },
  'login.incorrect.credentials.error': {
    id: 'login.incorrect.credentials.error',
    defaultMessage: 'Tên người dùng, email hoặc mật khẩu bạn đã nhập không chính xác. Vui lòng thử lại.',
    description: 'Thông báo lỗi cho email hoặc mật khẩu không chính xác',
  },
  'login.form.invalid.error.message': {
    id: 'login.form.invalid.error.message',
    defaultMessage: 'Vui lòng điền vào các trường bên dưới.',
    description: 'Thông báo cho người dùng khi để trống trường nhập trên biểu mẫu đăng nhập',
  },
  'login.incorrect.credentials.error.reset.link.text': {
    id: 'login.incorrect.credentials.error.reset.link.text',
    defaultMessage: 'đặt lại mật khẩu của bạn',
    description: 'Văn bản liên kết đặt lại mật khẩu cho thông tin đăng nhập email hoặc mật khẩu không chính xác',
  },
  'login.incorrect.credentials.error.before.account.blocked.text': {
    id: 'login.incorrect.credentials.error.before.account.blocked.text',
    defaultMessage: 'nhấp vào đây để đặt lại.',
    description: 'Văn bản liên kết đặt lại mật khẩu cho thông tin đăng nhập email hoặc mật khẩu không chính xác trước khi chặn tài khoản',
  },
  // Vulnerable password change prompt
  'password.security.nudge.title': {
    id: 'password.security.nudge.title',
    defaultMessage: 'Bảo mật mật khẩu',
    description: 'Tiêu đề cho lời nhắc thúc đẩy người dùng thay đổi mật khẩu dễ bị tấn công của họ',
  },
  'password.security.block.title': {
    id: 'password.security.block.title',
    defaultMessage: 'Yêu cầu thay đổi mật khẩu',
    description: 'Tiêu đề cho lời nhắc yêu cầu người dùng thay đổi mật khẩu dễ bị tấn công của họ',
  },
  'password.security.nudge.body': {
    id: 'password.security.nudge.body',
    defaultMessage: 'Hệ thống của chúng tôi phát hiện rằng mật khẩu của bạn dễ bị tấn côn. '
                      + 'Chúng tôi khuyên bạn nên thay đổi nó để tài khoản của bạn được bảo mật.',
    description: 'Nội dung thông báo cho lời nhắc thúc đẩy người dùng thay đổi mật khẩu dễ bị tấn công của họ',
  },
  'password.security.block.body': {
    id: 'password.security.block.body',
    defaultMessage: 'Hệ thống của chúng tôi phát hiện rằng mật khẩu của bạn dễ bị tấn công. '
                      + 'Hãy thay đổi mật khẩu để tài khoản của bạn được bảo mật.',
    description: 'Nội dung thông báo cho lời nhắc yêu cầu người dùng thay đổi mật khẩu dễ bị tấn công của họ',
  },
  'password.security.close.button': {
    id: 'password.security.close.button',
    defaultMessage: 'Đóng',
    description: 'Nút để đóng cửa sổ bật lên',
  },
  'password.security.redirect.to.reset.password.button': {
    id: 'password.security.redirect.to.reset.password.button',
    defaultMessage: 'Đặt lại mật khẩu của bạn',
    description: 'Nút để chuyển hướng người dùng đến trang Đặt lại mật khẩu',
  },
  'login.tpa.authentication.failure': {
    id: 'login.tpa.authentication.failure',
    defaultMessage: 'Chúng tôi rất tiếc, bạn không được phép truy cập {platform_name} qua kênh này. '
        + 'Vui lòng liên hệ với quản trị viên học tập hoặc người quản lý của bạn để truy cập {platform_name}.'
        + '{lineBreak}{lineBreak}Chi tiết lỗi:{lineBreak}{errorMessage}',
    description: 'Thông báo lỗi khi quy trình xác thực của bên thứ ba thất bại',
  },
});

export default messages;