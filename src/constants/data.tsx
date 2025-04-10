import { FiSettings, FiCloud, FiTrendingUp, FiShield } from "react-icons/fi";
import {
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaHeadset,
  FaCog,
} from "react-icons/fa";

export const serviceCards = [
  {
    title: "Автоматизация работы с IT-инфраструктурой",
    description:
      "Мы настраиваем системы так, чтобы ваши сайты и приложения обновлялись автоматически, без ошибок и простоев.",
    tags: ["IT", "Автоматизация"],
    icon: FiSettings,
    longDescription:
      "Наша команда специализируется на автоматизации процессов управления IT-инфраструктурой с использованием современных DevOps-практик. Мы внедряем CI/CD (непрерывную интеграцию и непрерывную доставку), что позволяет автоматизировать тестирование и развертывание приложений, а также сократить время между внесением изменений в код и их внедрением в производство.",
    benefits: [
      "Сокращение времени выпуска новых версий продукта",
      "Минимизация ручных операций и уменьшение количества ошибок",
      "Повышение стабильности работы систем",
      "Снижение затрат на поддержку инфраструктуры",
      "Автоматическое масштабирование ресурсов в зависимости от нагрузки",
    ],
    useCases: [
      "Настройка автоматических сборок и тестирования кода с помощью CI/CD pipelines",
      "Внедрение контейнеризации и оркестрации с использованием Docker и Kubernetes",
      "Автоматизация процессов резервного копирования и восстановления данных",
      "Настройка мониторинга и автоматического реагирования на инциденты",
    ],
  },
  {
    title: "Работа с облачными сервисами",
    description:
      "Мы помогаем компаниям правильно использовать облачные технологии (AWS, Google Cloud, Microsoft Azure).",
    tags: ["Облако", "Сервис"],
    icon: FiCloud,
    longDescription:
      "Наша компания предоставляет полный спектр услуг по миграции, настройке и оптимизации работы в облачных средах. Мы имеем опыт работы с ведущими облачными провайдерами, включая AWS, Google Cloud Platform и Microsoft Azure. Наши специалисты помогут выбрать оптимальную облачную архитектуру, учитывая специфику вашего бизнеса и требования к производительности, безопасности и стоимости.",
    benefits: [
      "Оптимизация затрат на IT-инфраструктуру",
      "Повышение гибкости и масштабируемости систем",
      "Доступ к передовым технологиям без капитальных затрат",
      "Возможность быстрого запуска новых сервисов",
      "Повышенная надежность и отказоустойчивость",
    ],
    useCases: [
      "Миграция существующих приложений в облачную среду",
      "Проектирование и внедрение облачной инфраструктуры с нуля",
      "Настройка гибридных облачных решений",
      "Оптимизация затрат на облачные ресурсы",
      "Внедрение технологий серверлесс-вычислений",
    ],
  },
  {
    title: "Повышение надежности и скорости работы IT-систем",
    description:
      "Мы следим за тем, чтобы ваши цифровые сервисы работали без перебоев.",
    tags: ["IT - система", "Надежность"],
    icon: FiTrendingUp,
    longDescription:
      "Мы предлагаем комплексные решения по повышению производительности, надежности и доступности IT-систем. Наши эксперты проводят детальный анализ существующих систем, выявляют узкие места и разрабатывают стратегии оптимизации. Мы внедряем современные практики мониторинга, балансировки нагрузки и кэширования для обеспечения бесперебойной работы ваших сервисов даже при пиковых нагрузках.",
    benefits: [
      "Минимизация простоев и увеличение доступности сервисов",
      "Улучшение пользовательского опыта за счет увеличения скорости работы",
      "Снижение рисков потери данных и нарушения бизнес-процессов",
      "Раннее выявление потенциальных проблем до их влияния на пользователей",
      "Повышение конкурентоспособности бизнеса",
    ],
    useCases: [
      "Внедрение систем мониторинга и оповещения о проблемах",
      "Оптимизация архитектуры приложений для повышения производительности",
      "Настройка CDN для ускорения доставки контента",
      "Внедрение отказоустойчивых решений с географическим распределением",
      "Оптимизация баз данных и запросов к ним",
    ],
  },
  {
    title: "Безопасность и защита данных",
    description:
      "Мы внедряем современные решения для защиты данных и предотвращения утечек.",
    tags: ["Данные", "Защита"],
    icon: FiShield,
    longDescription:
      "Наша команда специалистов по безопасности помогает компаниям защитить их критически важные данные и IT-инфраструктуру от современных киберугроз. Мы предлагаем комплексный подход к безопасности, включающий оценку рисков, внедрение превентивных мер защиты, настройку систем обнаружения вторжений и разработку планов реагирования на инциденты. Наши решения соответствуют международным стандартам и лучшим практикам в области информационной безопасности.",
    benefits: [
      "Защита конфиденциальных данных компании и клиентов",
      "Соответствие законодательным требованиям и отраслевым стандартам",
      "Снижение рисков финансовых и репутационных потерь",
      "Повышение доверия клиентов и партнеров",
      "Непрерывность бизнес-процессов даже при попытках атак",
    ],
    useCases: [
      "Проведение аудита безопасности и оценки рисков",
      "Внедрение многоуровневой защиты периметра сети",
      "Настройка шифрования данных в состоянии покоя и при передаче",
      "Управление доступом и идентификацией пользователей",
      "Мониторинг безопасности и реагирование на инциденты в режиме реального времени",
    ],
  },
];

export const benefits = [
  {
    title: "Экономия времени и ресурсов",
    description: "автоматизация сокращает ручной труд.",
  },
  {
    title: "Высокая надежность",
    description: "минимизируем вероятность сбоев и простоев.",
  },
  {
    title: "Скорость работы",
    description: "улучшаем загрузку сайтов и приложений.",
  },
  {
    title: "Безопасность",
    description: "защищаем данные от утечек и атак.",
  },
];

export const footerLinks = [
  {
    text: "Сертификат Резидента ИТ парка",
    url: "https://it-market.uz/my/residents/5CpG4E3dnXyjustC2Qbu7F/profile/certificate",
  },
  {
    text: "Список обновлений",
    url: "https://fetg.uz/changelog/",
  },
  {
    text: "Способы оплаты",
    url: "https://fetg.uz/payment/",
  },
  {
    text: "Wiki",
    url: "https://wiki.fetg.uz/",
  },
  {
    text: "Предложить идею",
    url: "#",
  },
];

export const navigationItems = [
  { label: "О ПРОДУКТЕ" },
  { label: "ЦЕНЫ" },
  { label: "КОНТАКТЫ" },
];

export const heroSlides = [
  {
    title: "Современные IT-решения для вашего бизнеса",
    highlight: "IT-решения",
    description:
      "Хотите, чтобы ваш сайт, приложение или онлайн-сервис работали быстро, надежно и без сбоев? Мы занимаемся тем, что делаем IT-инфраструктуру автоматизированной, безопасной и удобной в управлении.",
    icon: FaServer,
    iconColor: "#6573ff",
  },
  {
    title: "Облачные технологии для эффективной работы",
    highlight: "Облачные технологии",
    description:
      "Переведите вашу инфраструктуру в облако и получите доступ к данным из любой точки мира. Наши облачные решения обеспечивают высокую доступность и масштабируемость вашего бизнеса.",
    icon: FaCloud,
    iconColor: "#4facfe",
  },
  {
    title: "Защита данных на высшем уровне",
    highlight: "Защита данных",
    description:
      "Мы обеспечиваем комплексную защиту ваших данных от несанкционированного доступа, вирусов и других угроз. Безопасность вашего бизнеса - наш приоритет.",
    icon: FaShieldAlt,
    iconColor: "#43c6ac",
  },
  {
    title: "Техническая поддержка 24/7",
    highlight: "Техническая поддержка",
    description:
      "Наша команда специалистов готова решить любые технические проблемы в любое время суток. Мы гарантируем быстрое реагирование и эффективное устранение неполадок.",
    icon: FaHeadset,
    iconColor: "#f7b733",
  },
  {
    title: "Индивидуальные решения для бизнеса",
    highlight: "Индивидуальные решения",
    description:
      "Разрабатываем IT-решения с учетом специфики вашей отрасли и потребностей бизнеса. Наш индивидуальный подход поможет вам выделиться среди конкурентов.",
    icon: FaCog,
    iconColor: "#ed213a",
  },
];
