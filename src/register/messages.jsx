import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'register.page.title': {
    id: 'register.page.title',
    defaultMessage: 'Đăng ký | {siteName}',
    description: 'tiêu đề trang đăng ký',
  },
  // Field labels
  'registration.fullname.label': {
    id: 'registration.fullname.label',
    defaultMessage: 'Họ và tên',
    description: 'Nhãn xuất hiện phía trên trường họ và tên',
  },
  'registration.email.label': {
    id: 'registration.email.label',
    defaultMessage: 'Email',
    description: 'Nhãn xuất hiện phía trên trường email trên trang đăng ký',
  },
  'registration.username.label': {
    id: 'registration.username.label',
    defaultMessage: 'Tên người dùng công khai',
    description: 'Nhãn xuất hiện phía trên trường tên người dùng',
  },
  'registration.password.label': {
    id: 'registration.password.label',
    defaultMessage: 'Mật khẩu',
    description: 'Nhãn xuất hiện phía trên trường mật khẩu',
  },
  'registration.country.label': {
    id: 'registration.country.label',
    defaultMessage: 'Quốc gia/Khu vực',
    description: 'Văn bản giữ chỗ cho danh sách thả xuống chọn quốc gia.',
  },
  'registration.opt.in.label': {
    id: 'registration.opt.in.label',
    defaultMessage: 'Tôi đồng ý rằng {siteName} có thể gửi cho tôi các tin nhắn tiếp thị.',
    description: 'Văn bản cho tùy chọn tham gia (opt-in) trên trang đăng ký.',
  },
  // Help text
  'help.text.name': {
    id: 'help.text.name',
    defaultMessage: 'Tên này sẽ được sử dụng cho bất kỳ chứng chỉ nào bạn nhận được.',
    description: 'Văn bản trợ giúp cho trường họ và tên trên trang đăng ký',
  },
  'help.text.username.1': {
    id: 'help.text.username.1',
    defaultMessage: 'Tên sẽ nhận dạng bạn trong các khóa học.',
    description: 'Một phần của văn bản trợ giúp cho trường tên người dùng trên trang đăng ký',
  },
  'help.text.username.2': {
    id: 'help.text.username.2',
    defaultMessage: 'Không thể thay đổi thông tin này sau này.',
    description: 'Một phần của văn bản trợ giúp cho trường tên người dùng trên trang đăng ký',
  },
  'help.text.email': {
    id: 'help.text.email',
    defaultMessage: 'Dùng để kích hoạt tài khoản và nhận các cập nhật quan trọng',
    description: 'Văn bản trợ giúp cho trường email trên trang đăng ký',
  },
  // Form buttons
  'create.account.for.free.button': {
    id: 'create.account.for.free.button',
    defaultMessage: 'Tạo tài khoản miễn phí',
    description: 'Văn bản nhãn cho nút gửi biểu mẫu đăng ký',
  },
  'create.account.cta.button': {
    id: 'create.account.cta.button',
    defaultMessage: '{label}',
    description: 'Văn bản nhãn cho nút gửi biểu mẫu đăng ký dành cho những người dùng truy cập qua chuyển hướng',
  },
  // Institution login
  'register.institution.login.page.title': {
    id: 'register.institution.login.page.title',
    defaultMessage: 'Đăng ký bằng thông tin đăng nhập của trường/cơ sở',
    description: 'Tiêu đề của trang [đăng ký] trường',
  },
  // Validation messages
  'empty.name.field.error': {
    id: 'empty.name.field.error',
    defaultMessage: 'Nhập họ và tên của bạn',
    description: 'Thông báo lỗi cho trường họ và tên bị trống',
  },
  'empty.email.field.error': {
    id: 'empty.email.field.error',
    defaultMessage: 'Nhập email của bạn',
    description: 'Thông báo lỗi cho trường email bị trống',
  },
  'empty.username.field.error': {
    id: 'empty.username.field.error',
    defaultMessage: 'Tên người dùng phải có từ 2 đến 30 ký tự',
    description: 'Thông báo lỗi cho trường tên người dùng bị trống',
  },
  'empty.password.field.error': {
    id: 'empty.password.field.error',
    defaultMessage: 'Mật khẩu chưa đáp ứng tiêu chí',
    description: 'Thông báo lỗi cho trường mật khẩu bị trống',
  },
  'empty.country.field.error': {
    id: 'empty.country.field.error',
    defaultMessage: 'Chọn quốc gia hoặc khu vực cư trú của bạn',
    description: 'Thông báo lỗi khi không có quốc gia/khu vực nào được chọn',
  },
  'invalid.country.field.error': {
    id: 'invalid.country.field.error',
    defaultMessage: 'Quốc gia phải khớp với một tùy chọn có sẵn trong danh sách thả xuống.',
    description: 'Thông báo lỗi khi quốc gia không hợp lệ',
  },
  'email.do.not.match': {
    id: 'email.do.not.match',
    defaultMessage: 'Các địa chỉ email không khớp.',
    description: 'Email không khớp với email xác nhận',
  },
  'email.invalid.format.error': {
    id: 'email.invalid.format.error',
    defaultMessage: 'Nhập một địa chỉ email hợp lệ',
    description: 'Lỗi xác thực cho địa chỉ email không hợp lệ',
  },
  'username.validation.message': {
    id: 'username.validation.message',
    defaultMessage: 'Tên người dùng phải có từ 2 đến 30 ký tự',
    description: 'Thông báo lỗi cho trường tên người dùng bị trống',
  },
  'name.validation.message': {
    id: 'name.validation.message',
    defaultMessage: 'Nhập tên hợp lệ',
    description: 'Thông báo xác thực xuất hiện khi họ và tên chứa URL',
  },
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'Mật khẩu chưa đáp ứng tiêu chí',
    description: 'Thông báo lỗi cho mật khẩu trống hoặc không hợp lệ',
  },
  'username.format.validation.message': {
    id: 'username.format.validation.message',
    defaultMessage: 'Tên người dùng chỉ có thể chứa chữ cái (A-Z, a-z), chữ số (0-9), dấu gạch dưới (_) và dấu gạch nối (-). Tên người dùng không được chứa dấu cách',
    description: 'Thông báo xác thực xuất hiện khi định dạng tên người dùng không hợp lệ',
  },
  // Error messages
  'registration.request.failure.header': {
    id: 'registration.request.failure.header',
    defaultMessage: 'Chúng tôi không thể tạo tài khoản của bạn.',
    description: 'thông báo lỗi khi đăng ký thất bại.',
  },
  'registration.empty.form.submission.error': {
    id: 'registration.empty.form.submission.error',
    defaultMessage: 'Vui lòng kiểm tra lại các phản hồi của bạn và thử lại.',
    description: 'Thông báo lỗi xuất hiện ở đầu biểu mẫu khi biểu mẫu trống được gửi đi',
  },
  'registration.request.server.error': {
    id: 'registration.request.server.error',
    defaultMessage: 'Đã xảy ra lỗi. Vui lòng thử làm mới trang hoặc kiểm tra kết nối internet của bạn.',
    description: 'Thông báo lỗi cho lỗi máy chủ nội bộ.',
  },
  'registration.rate.limit.error': {
    id: 'registration.rate.limit.error',
    defaultMessage: 'Quá nhiều lần đăng ký thất bại. Vui lòng thử lại sau.',
    description: 'Thông báo lỗi xuất hiện khi người dùng ẩn danh đã thực hiện quá nhiều lần đăng ký thất bại',
  },
  'registration.tpa.session.expired': {
    id: 'registration.tpa.session.expired',
    defaultMessage: 'Đăng ký bằng {provider} đã hết thời gian.',
    description: '',
  },
  'registration.forbidden.username': {
    id: 'registration.forbidden.username',
    defaultMessage: 'Tên người dùng không thể bao gồm các từ có thể bị nhầm lẫn với vai trò trong khóa học. Vui lòng chọn một tên người dùng khác.',
    description: '',
  },
  'registration.tpa.authentication.failure': {
    id: 'registration.tpa.authentication.failure',
    defaultMessage: 'Chúng tôi rất tiếc, bạn không được phép truy cập {platform_name} qua kênh này. '
        + 'Vui lòng liên hệ với quản trị viên học tập hoặc người quản lý của bạn để truy cập {platform_name}.'
        + '{lineBreak}{lineBreak}Chi tiết lỗi:{lineBreak}{errorMessage}',
    description: 'Thông báo lỗi khi quy trình xác thực của bên thứ ba thất bại',
  },
  // Terms of Service and Honor Code
  'terms.of.service.and.honor.code': {
    id: 'terms.of.service.and.honor.code',
    defaultMessage: 'Điều khoản dịch vụ và Quy tắc danh dự',
    description: 'Văn bản cho siêu liên kết chuyển hướng người dùng đến điều khoản dịch vụ và quy tắc danh dự',
  },
  'privacy.policy': {
    id: 'privacy.policy',
    defaultMessage: 'Chính sách bảo mật',
    description: 'Văn bản cho siêu liên kết chuyển hướng người dùng đến chính sách bảo mật',
  },
  'honor.code': {
    id: 'honor.code',
    defaultMessage: 'Quy tắc danh dự',
    description: 'Văn bản cho siêu liên kết chuyển hướng người dùng đến quy tắc danh dự',
  },
  'terms.of.service': {
    id: 'terms.of.service',
    defaultMessage: 'Điều khoản dịch vụ',
    description: 'Văn bản cho siêu liên kết chuyển hướng người dùng đến điều khoản dịch vụ',
  },
  // miscellaneous strings
  'registration.username.suggestion.label': {
    id: 'registration.username.suggestion.label',
    defaultMessage: 'Gợi ý:',
    description: 'Văn bản nhãn tên người dùng được đề xuất.',
  },
  'did.you.mean.alert.text': {
    id: 'did.you.mean.alert.text',
    defaultMessage: 'Có phải ý bạn là',
    description: 'Gợi ý cảnh báo "Có phải ý bạn là"',
  },
});

export default messages;