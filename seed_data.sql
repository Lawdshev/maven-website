-- ================================================
-- Seed Data for Tech Blog Rollout (30 Articles)
-- ================================================

-- Enable pgcrypto for UUIDs and password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ================================================
-- 1. Users (1 admin + 1 contributor)
-- ================================================
INSERT INTO users (first_name, last_name, username, email, hashed_password, is_admin, is_superuser, is_active)
VALUES
    ('Alex', 'Admin', 'techadmin', 'admin@techblog.com',
     crypt('Admin@123', gen_salt('bf')), TRUE, TRUE, TRUE),
    ('Sam', 'Coder', 'devsam', 'devsam@techblog.com',
     crypt('Dev@123', gen_salt('bf')), FALSE, FALSE, TRUE)
ON CONFLICT (username) DO NOTHING;

-- ================================================
-- 2. Categories (Tech Topics)
-- ================================================
INSERT INTO categories (name)
VALUES
    ('Web Development'),
    ('Data Science'),
    ('Cloud Computing'),
    ('Cybersecurity'),
    ('DevOps'),
    ('AI & Machine Learning'),
    ('Mobile Development'),
    ('Blockchain & Web3')
ON CONFLICT (name) DO NOTHING;

-- ================================================
-- 3. Blog Posts (30 Tech Articles)
-- ================================================
INSERT INTO blog_posts (title, content, thumbnail, category_id, is_published, author_id, read_time)
VALUES
    -- Web Development (5)
    ('10 Best Practices for Writing Clean Code',
     'Clean code improves readability, maintainability, and reduces bugs. Here are 10 tips every developer should know.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Web Development'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 6),
    ('Understanding React Hooks',
     'React Hooks simplify state management and side effects in functional components.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Web Development'),
     TRUE, (SELECT id FROM users WHERE username = 'devsam'), 5),
    ('Building Scalable REST APIs with Django',
     'Learn how to design and implement scalable REST APIs using Django and Django REST Framework.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Web Development'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 8),
    ('Next.js vs. Nuxt.js: A Complete Comparison',
     'Both frameworks are powerful for server-side rendering. This article compares Next.js and Nuxt.js.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Web Development'),
     TRUE, (SELECT id FROM users WHERE username = 'devsam'), 7),
    ('Modern CSS Layouts with Flexbox and Grid',
     'CSS Grid and Flexbox allow for responsive, flexible layouts. Here’s how to use them effectively.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Web Development'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 6),

    -- Data Science (4)
    ('Introduction to Machine Learning with Python',
     'Machine Learning is powering the future of AI. Learn how to get started with scikit-learn.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Data Science'),
     TRUE, (SELECT id FROM users WHERE username = 'devsam'), 7),
    ('Data Cleaning Techniques with Pandas',
     'Data cleaning is the foundation of good analysis. Learn the best practices using Pandas.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Data Science'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 5),
    ('Deep Learning vs. Traditional Machine Learning',
     'Explore the differences between deep learning models and traditional ML algorithms.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Data Science'),
     TRUE, (SELECT id FROM users WHERE username = 'devsam'), 8),
    ('Data Visualization with Matplotlib & Seaborn',
     'Effective visualization tells a story. Learn to create compelling plots in Python.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Data Science'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 6),

    -- Cloud Computing (4)
    ('Getting Started with AWS for Beginners',
     'AWS offers a wide range of cloud services. This article walks you through your first cloud project.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Cloud Computing'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 5),
    ('Top 10 Azure Services Developers Should Know',
     'Microsoft Azure offers powerful services for app development and deployment.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Cloud Computing'),
     TRUE, (SELECT id FROM users WHERE username = 'devsam'), 6),
    ('Serverless Computing Explained',
     'Serverless allows you to build apps without managing infrastructure. Learn the pros and cons.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Cloud Computing'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 7),
    ('Kubernetes Basics for Beginners',
     'Kubernetes is the backbone of container orchestration. Learn its core concepts.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Cloud Computing'),
     TRUE, (SELECT id FROM users WHERE username = 'devsam'), 8),

    -- Cybersecurity (4)
    ('Top 5 Cybersecurity Practices for Developers',
     'Security should never be an afterthought. Learn how to secure your applications.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Cybersecurity'),
     TRUE, (SELECT id FROM users WHERE username = 'devsam'), 4),
    ('OWASP Top 10 Explained',
     'Understand the most common security vulnerabilities and how to mitigate them.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Cybersecurity'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 7),
    ('How to Secure APIs with JWT & OAuth2',
     'API security is crucial. Learn how to protect your endpoints using JWT and OAuth2.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Cybersecurity'),
     TRUE, (SELECT id FROM users WHERE username = 'devsam'), 6),
    ('Zero Trust Architecture in Practice',
     'Zero Trust is the future of enterprise security. Here’s how to adopt it in your org.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Cybersecurity'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 8),

    -- DevOps (4)
    ('CI/CD Pipelines with GitHub Actions',
     'Automate your build, test, and deployment workflows using GitHub Actions.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'DevOps'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 6),
    ('Monitoring Applications with Prometheus & Grafana',
     'Learn how to collect metrics and visualize performance with Grafana dashboards.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'DevOps'),
     TRUE, (SELECT id FROM users WHERE username = 'devsam'), 7),
    ('Infrastructure as Code with Terraform',
     'Provision infrastructure reliably using Terraform IaC.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'DevOps'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 5),
    ('Dockerizing Python Applications',
     'A step-by-step guide to containerizing Python applications with Docker.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'DevOps'),
     TRUE, (SELECT id FROM users WHERE username = 'devsam'), 6),

    -- AI & Machine Learning (3)
    ('The Rise of Generative AI',
     'Explore how generative AI models like GPT are changing industries.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'AI & Machine Learning'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 7),
    ('Building Chatbots with Rasa',
     'Rasa is an open-source framework for conversational AI. Learn how to get started.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'AI & Machine Learning'),
     TRUE, (SELECT id FROM users WHERE username = 'devsam'), 6),
    ('Ethics in Artificial Intelligence',
     'AI adoption raises ethical questions. Explore bias, fairness, and transparency in AI.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'AI & Machine Learning'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 5),

    -- Mobile Development (3)
    ('Getting Started with Flutter',
     'Flutter enables cross-platform apps with a single codebase. Learn the basics.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Mobile Development'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 6),
    ('React Native vs. Swift for iOS Apps',
     'Should you go cross-platform with React Native or stick to native Swift for iOS?',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Mobile Development'),
     TRUE, (SELECT id FROM users WHERE username = 'devsam'), 7),
    ('Mobile App Security Best Practices',
     'Protecting user data is crucial in mobile development. Learn essential practices.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Mobile Development'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 5),

    -- Blockchain & Web3 (3)
    ('What is Blockchain? A Beginner’s Guide',
     'Blockchain is more than crypto. Learn the basics and real-world use cases.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Blockchain & Web3'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 6),
    ('Smart Contracts with Solidity',
     'Learn how to write and deploy your first Ethereum smart contract using Solidity.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Blockchain & Web3'),
     TRUE, (SELECT id FROM users WHERE username = 'devsam'), 8),
    ('The Future of Web3 and Decentralized Apps',
     'Web3 is reshaping the internet with decentralization and ownership.',
     'https://placehold.co/600x400',
     (SELECT id FROM categories WHERE name = 'Blockchain & Web3'),
     TRUE, (SELECT id FROM users WHERE username = 'techadmin'), 7)
ON CONFLICT (title) DO NOTHING;
