// Textos-base das políticas da loja.
// IMPORTANTE: revise com assessoria jurídica e complete com os dados reais da empresa
// (razão social, CNPJ, endereço, canais e prazos operacionais) antes de abrir a loja.
import Link from "next/link";
import { siteConfig } from "@/lib/config";

const company = () => siteConfig.legalName ?? "TECHNOVA";
const contactLine = () => (
  <>
    pelos canais disponíveis na nossa <Link href="/contato">página de contato</Link>
    {siteConfig.contactEmail && <> ou pelo e-mail <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></>}
  </>
);

export const POLICIES: Record<string, { title: string; description: string; body: () => React.ReactNode }> = {
  privacidade: {
    title: "Política de privacidade",
    description: "Como a TECHNOVA coleta, usa e protege seus dados pessoais, conforme a LGPD.",
    body: () => (
      <>
        <p>
          Esta política explica como {company()}
          {siteConfig.cnpj && <> (CNPJ {siteConfig.cnpj})</>} trata os dados pessoais de quem visita e compra em nossa loja, em conformidade com a
          Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD).
        </p>
        <h2>1. Dados que coletamos</h2>
        <ul>
          <li><strong>Dados de cadastro e pedido:</strong> nome, e-mail, telefone, CPF e endereço de entrega, informados por você no checkout.</li>
          <li><strong>Dados de contato:</strong> informações enviadas pelo formulário de atendimento ou pelo WhatsApp.</li>
          <li><strong>Dados de navegação:</strong> o carrinho de compras fica salvo apenas no seu navegador (armazenamento local) e pode ser apagado a qualquer momento.</li>
        </ul>
        <h2>2. Para que usamos os dados</h2>
        <ul>
          <li>Processar, entregar e dar suporte aos seus pedidos (execução de contrato).</li>
          <li>Emitir nota fiscal e cumprir obrigações legais e fiscais.</li>
          <li>Responder às suas solicitações de atendimento.</li>
          <li>Prevenir fraudes e garantir a segurança da loja (legítimo interesse).</li>
        </ul>
        <p>Não vendemos seus dados pessoais. Mensagens promocionais só são enviadas com o seu consentimento.</p>
        <h2>3. Compartilhamento</h2>
        <p>
          Compartilhamos dados somente com parceiros necessários para concluir a compra — como meios de pagamento, transportadoras e
          provedores de hospedagem — e com autoridades, quando exigido por lei.
        </p>
        <h2>4. Segurança e retenção</h2>
        <p>
          Utilizamos conexão criptografada (HTTPS), controle de acesso restrito ao painel administrativo e boas práticas de segurança. Os dados
          são mantidos pelo tempo necessário para cumprir as finalidades acima e as obrigações legais.
        </p>
        <h2>5. Seus direitos</h2>
        <p>
          Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou eliminação dos seus dados, além de
          revogar consentimentos, {contactLine()}.
        </p>
      </>
    ),
  },
  "trocas-e-devolucoes": {
    title: "Trocas e devoluções",
    description: "Direito de arrependimento, produtos com defeito e como solicitar trocas ou devoluções na TECHNOVA.",
    body: () => (
      <>
        <p>Queremos que você fique satisfeito com sua compra. Confira abaixo como funcionam trocas e devoluções.</p>
        <h2>1. Direito de arrependimento (7 dias)</h2>
        <p>
          Conforme o artigo 49 do Código de Defesa do Consumidor, você pode desistir da compra em até <strong>7 (sete) dias corridos</strong> a
          contar do recebimento do produto. O valor pago é devolvido integralmente, incluindo o frete, pela mesma forma de pagamento.
        </p>
        <p>Para agilizar, envie o produto com todos os acessórios, manuais e, sempre que possível, na embalagem original.</p>
        <h2>2. Produto com defeito</h2>
        <p>
          Produtos com defeito de fabricação contam com a garantia legal de <strong>90 dias</strong> (art. 26 do CDC), além da garantia do
          fabricante, quando houver. Após a análise técnica, o produto é reparado, trocado ou o valor é devolvido, conforme a lei.
        </p>
        <h2>3. Produto avariado ou divergente</h2>
        <p>Se o produto chegar danificado ou diferente do pedido, recuse a entrega quando possível ou nos avise o quanto antes, com fotos da embalagem e do item.</p>
        <h2>4. Como solicitar</h2>
        <p>Entre em contato {contactLine()} informando o número do pedido e o motivo. Nossa equipe envia as instruções de postagem.</p>
      </>
    ),
  },
  "termos-de-uso": {
    title: "Termos de uso",
    description: "Condições gerais de uso do site e de compra na loja TECHNOVA.",
    body: () => (
      <>
        <p>Ao navegar e comprar nesta loja, você concorda com os termos abaixo. Leia com atenção.</p>
        <h2>1. Sobre a loja</h2>
        <p>
          Este site é operado por {company()}
          {siteConfig.cnpj && <>, inscrita no CNPJ {siteConfig.cnpj}</>}
          {siteConfig.address && <>, com endereço em {siteConfig.address}</>}.
        </p>
        <h2>2. Produtos, preços e estoque</h2>
        <p>
          Fazemos o possível para manter descrições, imagens, preços e estoque corretos. Em caso de erro evidente de preço ou indisponibilidade,
          entraremos em contato antes de qualquer cobrança, podendo o pedido ser cancelado sem custo para você.
        </p>
        <h2>3. Pedidos e pagamento</h2>
        <p>
          O pedido é registrado ao final do checkout e só é considerado confirmado após a aprovação do pagamento. O valor do frete é informado
          antes do pagamento. Não armazenamos dados de cartão de crédito em nossos servidores.
        </p>
        <h2>4. Entrega</h2>
        <p>Prazos e valores de entrega são informados de acordo com o CEP de destino e a modalidade escolhida.</p>
        <h2>5. Avaliações</h2>
        <p>Avaliações enviadas pelos clientes passam por moderação antes da publicação. Conteúdos ofensivos ou sem relação com o produto não são publicados.</p>
        <h2>6. Contato</h2>
        <p>Dúvidas sobre estes termos podem ser enviadas {contactLine()}.</p>
      </>
    ),
  },
};
