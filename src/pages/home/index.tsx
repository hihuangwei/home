import { Button, Row, Col, Typography } from 'antd';
import { useEffect, useState } from 'react';
import styles from './index.less';
import { request } from 'umi';
import { Helmet } from 'umi';

const { Text } = Typography;

export default function IndexPage() {
  const [title, setTitle] = useState('加载中...');
  const [site, setSite] = useState([]);
  const [footer, setFooter] = useState({
    slogan: '',
    copyright: '',
  });

  useEffect(() => {
    request('./data.json').then((res) => {
      setTitle(res.title);
      setFooter(res.footer);
      setSite(res.data);
    });
  }, []);

  const date = new Date();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img style={{ width: '100%' }} src={require('@/images/logo.png')} alt="logo" />
          </div>
        </div>
        {site.map((item: { title: string; children: any }) => (
          <div className={styles.nav} key={item.title}>
            <div style={{ paddingBottom: '5px' }}>
              <Text type="secondary">{item.title}</Text>
            </div>
            <Row gutter={[10, 10]}>
              {item.children.map((subItem: { name: string; url: string }) => (
                <Col xs={12} sm={8} md={6} lg={4} key={subItem.name}>
                  <Button
                    type="primary"
                    size="large"
                    href={subItem.url}
                    target="_blank"
                    block
                    ghost
                  >
                    {subItem.name}
                  </Button>
                </Col>
              ))}
            </Row>
          </div>
        ))}
        {site.length > 0 ? (
          <div className={styles.footer}>
            <Text type="secondary" style={{ fontSize: '16px' }}>
              {footer.slogan}
            </Text>
            <br></br>
            <Text type="secondary" style={{ fontSize: '12px' }}>
              © {date.getFullYear()} {footer.copyright}
            </Text>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
